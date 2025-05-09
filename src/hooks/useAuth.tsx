
// src/hooks/useAuth.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { authService } from '@/services/authService';
import { AuthContextType } from '@/types/auth.types';

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
      const { data, error } = await authService.fetchProfile(userId);
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
      // First set up listener to avoid race conditions
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);

        if (currentSession?.user) {
          // Defer profile fetch slightly to avoid potential deadlocks
          setTimeout(() => {
            fetchProfile(currentSession.user.id);
          }, 0);
        } else {
          setProfile(null);
          setUserRole(null);
        }
      });

      // Then check for existing session
      const {
        data: { session: currentSession },
      } = await supabase.auth.getSession();

      if (currentSession) {
        setSession(currentSession);
        setUser(currentSession.user);
        await fetchProfile(currentSession.user.id);
      }

      setIsLoading(false);

      return () => {
        subscription.unsubscribe();
      };
    };

    init();
  }, []);

  const signIn = async (email: string, password: string) => {
    return await authService.signIn(email, password, toast);
  };

  const signInWithGoogle = async () => {
    return await authService.signInWithGoogle(toast);
  };

  const signUp = async (
    email: string,
    password: string,
    userData?: Record<string, any>
  ) => {
    return await authService.signUp(email, password, userData, toast);
  };

  const signOut = async () => {
    await authService.signOut(toast);
    setUser(null);
    setSession(null);
    setProfile(null);
    setUserRole(null);
  };

  const linkAccounts = async (email: string, provider: string) => {
    if (!user) return { error: new Error('No active user session') };
    return await authService.linkAccounts(user.id, email, provider, toast);
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
    linkAccounts,
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
