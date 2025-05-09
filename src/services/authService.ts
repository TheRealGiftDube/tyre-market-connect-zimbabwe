
import { supabase } from '@/integrations/supabase/client';
import { cleanupAuthState } from '@/utils/authUtils';

// Replace the complex type with an explicitly defined interface
type ToastProps = {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'info';
};

/**
 * Service for handling authentication operations
 */
export const authService = {
  /**
   * Sign in with email and password
   */
  signIn: async (email: string, password: string, toast: (props: ToastProps) => void) => {
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
  signInWithGoogle: async (toast: (props: ToastProps) => void) => {
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
  },

  /**
   * Sign up with email and password
   */
  signUp: async (
    email: string,
    password: string,
    userData?: Record<string, any>,
    toast?: (props: ToastProps) => void
  ) => {
    try {
      // Clean up existing auth state first
      cleanupAuthState();
      
      // Check if a user already exists with this email
      // This will help us link accounts later if needed
      const { data: existingUserData } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .maybeSingle();
        
      // Proceed with signup
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            ...userData || {},
            // If there's an existing profile, we'll try to link it later
            existing_profile_id: existingUserData?.id || null,
          },
        },
      });

      if (error) {
        toast?.({
          title: 'Signup failed',
          description: error.message,
          variant: 'destructive',
        });
        return { error, user: null };
      }

      // If we have an existing user with this email from another provider, 
      // we should store a reference to connect them
      if (data.user && existingUserData?.id) {
        try {
          // Instead of trying to use a field that doesn't exist,
          // we'll store the connection information in user_metadata
          await supabase.auth.updateUser({
            data: { 
              connected_to_profile: existingUserData.id 
            }
          });
            
          toast?.({
            title: 'Account linked',
            description: 'Your accounts have been unified successfully.',
          });
        } catch (linkError) {
          console.error('Failed to link accounts:', linkError);
        }
      }

      toast?.({
        title: 'Signup successful',
        description: 'Please check your email to confirm your account.',
      });

      return { error: null, user: data.user };
    } catch (err) {
      console.error('Signup error:', err);
      toast?.({
        title: 'Unexpected error',
        description: 'Could not complete signup.',
        variant: 'destructive',
      });
      return { error: err, user: null };
    }
  },

  /**
   * Link multiple authentication methods to one account
   */
  linkAccounts: async (
    currentUserId: string, 
    email: string, 
    provider: string,
    toast: (props: ToastProps) => void
  ) => {
    try {
      // Further simplify the query to avoid excessive type recursion
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
  signOut: async (toast: (props: ToastProps) => void) => {
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
  fetchProfile: async (userId: string) => {
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
