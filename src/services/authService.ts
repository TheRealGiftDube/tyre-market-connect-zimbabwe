
import { supabase } from '@/integrations/supabase/client';
import { cleanupAuthState } from '@/utils/authUtils';
import { toast as toastFunction } from '@/hooks/use-toast';

type ToastProps = Parameters<typeof toastFunction>[0];

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

      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        toast({
          title: 'Login failed',
          description: error.message,
          variant: 'destructive',
        });
        return { error };
      }

      toast({ title: 'Login successful', description: 'Welcome back!' });
      return { error: null };
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

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData || {},
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
