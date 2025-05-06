// src/hooks/useAuth.tsx

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

type AuthContextType = {
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
  userRole: 'admin' | 'seller' | 'buyer' | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<'admin' | 'seller' | 'buyer' | null>(null);
  const { toast } = useToast();

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      setProfile(data);
      setUserRole(data.role);
    } catch (err) {
      console.error('Failed to fetch profile:', err);
      toast({
        title: 'Error loading profile',
        description: 'Could not load your profile information.',
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    const init = async () => {
      const {
        data: { session: currentSession },
      } = await supabase.auth.getSession();

      if (currentSession) {
        setSession(currentSession);
        setUser(currentSession.user);
        await fetchProfile(currentSession.user.id);
      }

      setIsLoading(false);
    };

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);

      if (currentSession?.user) {
        await fetchProfile(currentSession.user.id);
      } else {
        setProfile(null);
        setUserRole(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
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
  };

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth`, // Or set this dynamically if needed
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
  };

  const signUp = async (
    email: string,
    password: string,
    userData?: Record<string, any>
  ) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData || {},
        },
      });

      if (error) {
        toast({
          title: 'Signup failed',
          description: error.message,
          variant: 'destructive',
        });
        return { error, user: null };
      }

      toast({
        title: 'Signup successful',
        description: 'Please check your email to confirm your account.',
      });

      return { error: null, user: data.user };
    } catch (err) {
      console.error('Signup error:', err);
      toast({
        title: 'Unexpected error',
        description: 'Could not complete signup.',
        variant: 'destructive',
      });
      return { error: err, user: null };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
      setProfile(null);
      setUserRole(null);
      toast({ title: 'Logged out', description: 'You have been signed out.' });
    } catch (err) {
      console.error('Sign out error:', err);
      toast({
        title: 'Sign out failed',
        description: 'Try again later.',
        variant: 'destructive',
      });
    }
  };

  const value: AuthContextType = {
    user,
    session,
    profile,
    isLoading,
    signIn,
    signInWithGoogle,
    signUp,
    signOut,
    userRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
