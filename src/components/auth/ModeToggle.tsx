
type ModeToggleProps = {
  mode: 'login' | 'signup';
  setMode: (mode: 'login' | 'signup') => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (password: string) => void;
};

export const ModeToggle = ({ 
  mode, 
  setMode, 
  setPassword, 
  setConfirmPassword 
}: ModeToggleProps) => {
  return (
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
  );
};
