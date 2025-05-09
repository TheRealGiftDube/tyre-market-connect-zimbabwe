// src/pages/Auth.tsx

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, Info, CheckCircle } from 'lucide-react';
import PasswordStrengthChecker from '@/components/auth/PasswordStrengthChecker';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cleanupAuthState } from '@/utils/authUtils';

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
    // Import requirements checking function from the PasswordStrengthChecker component
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
        const result = await signIn(email, password);
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

  // Import these functions from the PasswordStrengthChecker
  const { getPasswordRequirements, areAllRequirementsMet } = (() => {
    // ... keep existing code (password validation functions)
    const getPasswordRequirements = (password: string) => {
      return [
        {
          label: 'At least one lowercase letter',
          isMet: /[a-z]/.test(password),
        },
        {
          label: 'At least one uppercase letter',
          isMet: /[A-Z]/.test(password),
        },
        {
          label: 'At least one number',
          isMet: /\d/.test(password),
        },
        {
          label: 'At least one symbol',
          isMet: /[^\w\s]/.test(password),
        },
        {
          label: 'At least 8 characters',
          isMet: password.length >= 8,
        },
      ];
    };

    const areAllRequirementsMet = (requirements: { label: string; isMet: boolean }[]) => {
      return requirements.every(req => req.isMet);
    };

    return { getPasswordRequirements, areAllRequirementsMet };
  })();

  const isSignupButtonDisabled = 
    mode === 'signup' && (!allRequirementsMet || !passwordsMatch || isSubmitting || isLoading);

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
            {mode === 'signup' && (
              <Input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            )}
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            {/* Password field with show/hide toggle and info tooltip */}
            <div className="relative">
              <div className="flex justify-between items-center mb-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 p-0 text-muted-foreground"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Password must contain:</p>
                      <ul className="text-xs list-disc pl-4 mt-1">
                        <li>At least 8 characters</li>
                        <li>At least one uppercase letter</li>
                        <li>At least one lowercase letter</li>
                        <li>At least one number</li>
                        <li>At least one special character</li>
                      </ul>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {mode === 'signup' && allRequirementsMet && (
                  <span className="text-green-600 flex items-center text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" /> Strong password
                  </span>
                )}
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={mode === 'signup' && password && !allRequirementsMet ? "border-red-500 pr-10" : "pr-10"}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              
              {mode === 'signup' && password && (
                <PasswordStrengthChecker password={password} className="mt-2" />
              )}
            </div>
            
            {/* Confirm Password field with show/hide toggle */}
            {mode === 'signup' && (
              <div className="relative">
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={confirmPassword && !passwordsMatch ? "border-red-500 pr-10" : "pr-10"}
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {confirmPassword && (
                  <div className="flex items-center mt-1 ml-1">
                    {passwordsMatch ? (
                      <p className="text-green-600 flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" /> Passwords match
                      </p>
                    ) : (
                      <p className="text-red-500 text-xs">Passwords do not match</p>
                    )}
                  </div>
                )}
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={mode === 'login' ? (isSubmitting || isLoading) : isSignupButtonDisabled}
            >
              {isSubmitting ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>

          <Separator className="my-6" />

          <Button
            variant="outline"
            className="w-full"
            onClick={signInWithGoogle}
            disabled={isLoading}
          >
            Continue with Google
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            {mode === 'login' ? (
              <>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setPassword('');
                    setConfirmPassword('');
                  }}
                  className="text-primary underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setPassword('');
                    setConfirmPassword('');
                  }}
                  className="text-primary underline"
                >
                  Sign In
                </button>
              </>
            )}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
