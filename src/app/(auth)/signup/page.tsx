import SignUpScreen from "@/src/modules/auth/screens/signup";
import useSignup from "@/src/modules/auth/hooks/useSignup";

export default function SignUp() {
  const { control, errors, handleSubmit, isSubmitting, onSubmit } = useSignup();

  return (
    <SignUpScreen 
      control={control}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      errors={errors}
    />
  )
}
