import { useForm } from "react-hook-form";
import { authService } from "@/src/services/authService";

import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { z } from "zod";

const signinSchema = z.object({
  email: z
    .string()
    .email("Digite um e-mail válido.")
    .min(1, "O e-mail é obrigatório."),
  password: z.string().min(1, "A senha é obrigatória.").nonempty("A senha é obrigatória."),
});

export type SignInFormData = z.infer<typeof signinSchema>;

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
