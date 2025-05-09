
import { supabase } from '@/integrations/supabase/client';
import { cleanupAuthState } from '@/utils/authUtils';
import { ToastProps, LinkAccountsResponse, FetchProfileResponse } from './types';

/**
 * Service for handling account operations
 */
export const accountService = {
  /**
   * Link multiple authentication methods to one account
   */
  linkAccounts: async (
    currentUserId: string, 
    email: string, 
    provider: string,
    toast: (props: ToastProps) => void
  ): Promise<LinkAccountsResponse> => {
    try {
      // Simple query to prevent excessive type recursion
      const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .neq('id', currentUserId);
        
      if (error) {
        console.error('Error checking for existing profile:', error);
        return { error };
      }
      
      // Get the first profile if any exists
      const existingProfile = data && data.length > 0 ? data[0] : null;
      
      if (existingProfile) {
        // Update user metadata to store the connection
        const { error: updateError } = await supabase.auth.updateUser({
          data: { 
            connected_to_profile: existingProfile.id 
          }
        });
          
        if (updateError) {
          console.error('Failed to link accounts:', updateError);
          toast({
            title: 'Account linking failed',
            description: 'Could not link your accounts. Please try again.',
            variant: 'destructive',
          });
          return { error: updateError };
        }
        
        toast({
          title: 'Accounts linked',
          description: `Your ${provider} account has been linked successfully.`,
        });
        
        return { error: null };
      } else {
        // No existing profile found with this email
        return { error: null };
      }
    } catch (err) {
      console.error('Account linking error:', err);
      toast({
        title: 'Account linking failed',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
      return { error: err };
    }
  },

  /**
   * Sign out the current user
   */
  signOut: async (toast: (props: ToastProps) => void): Promise<void> => {
    try {
      // Clean up auth state first
      cleanupAuthState();

      // Attempt global sign out
      await supabase.auth.signOut({ scope: 'global' });
      
      toast({ title: 'Logged out', description: 'You have been signed out.' });
      
      // Force page reload for clean state
      window.location.href = '/';
    } catch (err) {
      console.error('Sign out error:', err);
      toast({
        title: 'Sign out failed',
        description: 'Try again later.',
        variant: 'destructive',
      });
    }
  },

  /**
   * Fetch user profile from database
   */
  fetchProfile: async (userId: string): Promise<FetchProfileResponse> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (err) {
      console.error('Failed to fetch profile:', err);
      return { data: null, error: err };
    }
  }
};
