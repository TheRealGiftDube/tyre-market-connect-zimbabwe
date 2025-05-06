
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface PasswordRequirement {
  label: string;
  isMet: boolean;
}

interface PasswordStrengthCheckerProps {
  password: string;
  className?: string;
}

export const getPasswordRequirements = (password: string): PasswordRequirement[] => {
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

export const areAllRequirementsMet = (requirements: PasswordRequirement[]): boolean => {
  return requirements.every(req => req.isMet);
};

const PasswordStrengthChecker: React.FC<PasswordStrengthCheckerProps> = ({ 
  password,
  className 
}) => {
  const requirements = getPasswordRequirements(password);
  
  if (!password) {
    return null;
  }

  return (
    <div className={`text-sm mt-1 p-2 bg-muted/50 rounded-md ${className}`}>
      <p className="font-medium mb-1">Password must contain:</p>
      <ul className="space-y-1">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-center gap-2">
            {req.isMet ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 text-destructive" />
            )}
            <span className={req.isMet ? "text-green-700" : "text-destructive"}>
              {req.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordStrengthChecker;
