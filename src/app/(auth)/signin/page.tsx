import SignInScreen from "@/src/modules/auth/screens/signin";
import useSignin from "@/src/modules/auth/hooks/useSignin";

export default function SignIn() {
  const { control, errors, handleSubmit, isSubmitting, onSubmit } = useSignin();

  return (
    <SignInScreen 
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
    />
  );
}