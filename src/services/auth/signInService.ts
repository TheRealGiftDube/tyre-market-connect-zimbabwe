
import { supabase } from '@/integrations/supabase/client';
import { cleanupAuthState } from '@/utils/authUtils';
import { ToastProps, SignInResponse } from './types';

/**
 * Service for handling sign in operations
 */
export const signInService = {
  /**
   * Sign in with email and password
   */
  signIn: async (email: string, password: string, toast: (props: ToastProps) => void): Promise<SignInResponse> => {
    try {
      // Clean up existing auth state first
      cleanupAuthState();

      // Attempt global sign out first to prevent issues
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        // Continue even if this fails
        console.log('Pre-signout failed, continuing anyway');
      }

      console.log('Attempting login with:', email);
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        console.error('Login error details:', error);
        
        // Provide more specific error message based on error code
        let errorMessage = error.message;
        if (error.message.includes('Invalid login')) {
          errorMessage = 'Email or password is incorrect. Please try again.';
        }
        
        toast({
          title: 'Login failed',
          description: errorMessage,
          variant: 'destructive',
        });
        return { error };
      }

      toast({ title: 'Login successful', description: 'Welcome back!' });
      return { error: null, data };
    } catch (err) {
      console.error('Error during sign-in:', err);
      toast({
        title: 'Unexpected error',
        description: 'Please try again later.',
        variant: 'destructive',
      });
      return { error: err };
    }
  },

  /**
   * Sign in with Google OAuth
   */
  signInWithGoogle: async (toast: (props: ToastProps) => void): Promise<void> => {
    try {
      // Clean up existing auth state first
      cleanupAuthState();

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth`,
        },
      });

      if (error) {
        toast({
          title: 'Google sign-in failed',
          description: error.message,
          variant: 'destructive',
        });
      }
    } catch (err) {
      console.error('Google sign-in error:', err);
      toast({
        title: 'Unexpected error',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    }
  }
};
