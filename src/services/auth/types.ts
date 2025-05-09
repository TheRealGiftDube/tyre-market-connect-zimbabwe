
/**
 * Type definitions for authentication service
 */

export type ToastProps = {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'info';
};

export type SignInResponse = {
  error: any;
  data?: any;
};

export type SignUpResponse = {
  error: any;
  user: any;
};

export type LinkAccountsResponse = {
  error: any;
};

export type FetchProfileResponse = {
  data: any | null;
  error: any | null;
};
