
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type SocialLoginProps = {
  signInWithGoogle: () => Promise<void>;
  isLoading: boolean;
};

export const SocialLogin = ({ signInWithGoogle, isLoading }: SocialLoginProps) => {
  return (
    <>
      <Separator className="my-6" />
      
      <Button
        variant="outline"
        className="w-full"
        onClick={signInWithGoogle}
        disabled={isLoading}
      >
        Continue with Google
      </Button>
    </>
  );
};
