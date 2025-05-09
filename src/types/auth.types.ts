
import { User, Session } from '@supabase/supabase-js';

export type UserRole = 'admin' | 'seller' | 'buyer' | null;

export type AuthContextType = {
  user: User | null;
  session: Session | null;
  profile: any | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signInWithGoogle: () => Promise<void>;
  signUp: (
    email: string,
    password: string,
    userData?: Record<string, any>
  ) => Promise<{ error: any; user: any }>;
  signOut: () => Promise<void>;
  linkAccounts: (email: string, provider: string) => Promise<{ error: any }>;
  userRole: UserRole;
};
