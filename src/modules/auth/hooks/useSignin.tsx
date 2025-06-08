import { authService } from "@/src/modules/auth/services/authService";
import { SignInFormData, signinSchema } from "@/src/shared/types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";


const useSignin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      await authService.signIn(data.email, data.password);

      router.replace("/(panel)/home/page");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onSubmit,
    control,
    handleSubmit,
    errors,
    isSubmitting,
  };
};

export default useSignin;
