
/**
 * Utility functions for password validation
 */

export const getPasswordRequirements = (password: string) => {
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

export const areAllRequirementsMet = (requirements: { label: string; isMet: boolean }[]) => {
  return requirements.every(req => req.isMet);
};
