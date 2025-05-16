import { SignUpScreen } from "@/src/screens/signup";
import useSignup from "../../../hooks/useSignup";

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
