
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Info, CheckCircle } from 'lucide-react';
import PasswordStrengthChecker from '@/components/auth/PasswordStrengthChecker';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type EmailSignUpProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (password: string) => void;
  fullName: string;
  setFullName: (fullName: string) => void;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  showConfirmPassword: boolean;
  toggleConfirmPasswordVisibility: () => void;
  isSubmitting: boolean;
  isLoading: boolean;
  passwordsMatch: boolean;
  allRequirementsMet: boolean;
  getPasswordRequirements: (password: string) => Array<{ label: string; isMet: boolean; }>;
  areAllRequirementsMet: (requirements: Array<{ label: string; isMet: boolean; }>) => boolean;
};

export const EmailSignUp = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  fullName,
  setFullName,
  showPassword,
  togglePasswordVisibility,
  showConfirmPassword,
  toggleConfirmPasswordVisibility,
  isSubmitting,
  isLoading,
  passwordsMatch,
  allRequirementsMet,
  getPasswordRequirements,
  areAllRequirementsMet
}: EmailSignUpProps) => {

  return (
    <>
      <Input
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      
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
          {allRequirementsMet && (
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
            className={password && !allRequirementsMet ? "border-red-500 pr-10" : "pr-10"}
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
        
        {password && (
          <PasswordStrengthChecker password={password} className="mt-2" />
        )}
      </div>
      
      {/* Confirm Password field with show/hide toggle */}
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
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={!allRequirementsMet || !passwordsMatch || isSubmitting || isLoading}
      >
        {isSubmitting ? 'Please wait...' : 'Sign Up'}
      </Button>
    </>
  );
};
