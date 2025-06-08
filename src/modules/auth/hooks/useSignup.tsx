import { authService } from "@/src/modules/auth/services/authService";
import { SignUpFormData, signupSchema } from "@/src/shared/types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";

const useSignup = () => {

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpFormData>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await authService.signUp(data.email, data.password, data.username);

      router.replace("/(panel)/home/page")

    } catch (error) {
      console.log(error);
    }
  }

  return {
    onSubmit,
    control,
    handleSubmit,
    errors,
    isSubmitting
  }
};

export default useSignup;
