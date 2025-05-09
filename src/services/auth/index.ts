
import { signInService } from './signInService';
import { signUpService } from './signUpService';
import { accountService } from './accountService';
import { ToastProps } from './types';

/**
 * Consolidated auth service that combines all auth-related services
 */
export const authService = {
  // Sign in methods
  signIn: signInService.signIn,
  signInWithGoogle: signInService.signInWithGoogle,
  
  // Sign up methods
  signUp: signUpService.signUp,
  
  // Account management methods
  linkAccounts: accountService.linkAccounts,
  signOut: accountService.signOut,
  fetchProfile: accountService.fetchProfile
};

export type { ToastProps };
