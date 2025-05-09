
// src/pages/Auth.tsx

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cleanupAuthState } from '@/utils/authUtils';
import { EmailSignIn } from '@/components/auth/EmailSignIn';
import { EmailSignUp } from '@/components/auth/EmailSignUp';
import { SocialLogin } from '@/components/auth/SocialLogin';
import { ModeToggle } from '@/components/auth/ModeToggle';
import { getPasswordRequirements, areAllRequirementsMet } from '@/components/auth/PasswordUtils';

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signIn, signUp, signInWithGoogle, isLoading } = useAuth();

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Password validation state
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [allRequirementsMet, setAllRequirementsMet] = useState(false);

  useEffect(() => {
    // If user is already logged in, redirect to home page or the page they tried to access
    if (user) {
      const from = location.state?.from || '/';
      navigate(from, { replace: true });
    }
  }, [user, navigate, location.state]);
  
  // Check if passwords match whenever confirm password changes
  useEffect(() => {
    if (mode === 'signup') {
      setPasswordsMatch(password === confirmPassword && confirmPassword !== '');
    }
  }, [password, confirmPassword, mode]);
  
  // Update password strength validation
  useEffect(() => {
    if (mode === 'signup' && password) {
      const requirements = getPasswordRequirements(password);
      setAllRequirementsMet(areAllRequirementsMet(requirements));
    }
  }, [password, mode]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Clean up existing auth state to prevent issues
      cleanupAuthState();

      if (mode === 'login') {
        console.log('Login attempt with:', email);
        const result = await signIn(email, password);
        console.log('Login result:', result);
        if (!result.error) {
          // Redirect will happen in the useEffect when user state updates
        }
      } else {
        // Only proceed if all password requirements are met and passwords match
        if (allRequirementsMet && passwordsMatch) {
          const result = await signUp(email, password, { full_name: fullName });
          if (!result.error && result.user) {
            // Redirect will happen in the useEffect when user state updates
          }
        }
      }
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-fill admin credentials for testing
  useEffect(() => {
    if (email === '' && mode === 'login') {
      setEmail('mrwilliamchui@gmail.com');
      setPassword('Qwerty12#');
    }
  }, [mode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{mode === 'login' ? 'Sign In' : 'Sign Up'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'login' ? (
              <EmailSignIn 
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                showPassword={showPassword}
                togglePasswordVisibility={togglePasswordVisibility}
                isSubmitting={isSubmitting}
                isLoading={isLoading}
              />
            ) : (
              <EmailSignUp 
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                fullName={fullName}
                setFullName={setFullName}
                showPassword={showPassword}
                togglePasswordVisibility={togglePasswordVisibility}
                showConfirmPassword={showConfirmPassword}
                toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
                isSubmitting={isSubmitting}
                isLoading={isLoading}
                passwordsMatch={passwordsMatch}
                allRequirementsMet={allRequirementsMet}
                getPasswordRequirements={getPasswordRequirements}
                areAllRequirementsMet={areAllRequirementsMet}
              />
            )}
          </form>

          <SocialLogin 
            signInWithGoogle={signInWithGoogle}
            isLoading={isLoading}
          />

          <ModeToggle 
            mode={mode}
            setMode={setMode}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
          />
        </CardContent>
      </Card>
    </div>
  );
}
