
import { supabase } from '@/integrations/supabase/client';
import { cleanupAuthState } from '@/utils/authUtils';
import { ToastProps, SignUpResponse } from './types';

/**
 * Service for handling sign up operations
 */
export const signUpService = {
  /**
   * Sign up with email and password
   */
  signUp: async (
    email: string,
    password: string,
    userData?: Record<string, any>,
    toast?: (props: ToastProps) => void
  ): Promise<SignUpResponse> => {
    try {
      // Clean up existing auth state first
      cleanupAuthState();
      
      // Check if a user already exists with this email using a direct query without complex typing
      let existingUserData = null;
      try {
        const { data } = await supabase
          .rpc('get_user_by_email', { email_param: email });
        existingUserData = data && data.length > 0 ? data[0] : null;
      } catch (e) {
        // If the RPC function doesn't exist, fallback to a simple query
        const { data } = await supabase
          .from('profiles')
          .select('id')
          .eq('email', email)
          .limit(1);
        existingUserData = data && data.length > 0 ? data[0] : null;
      }
        
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
  }
};
