import { authService } from "../services/auth-service";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z
  .object({
    username: z.string().min(3, "O nome do usuário é obrigatório."),
    email: z
      .string()
      .email("Digite um e-mail válido.")
      .min(3, "O e-mail é obrigatório."),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPassword: z
      .string()
      .nonempty("A confirmação da senha é obrigatória."),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais.",
    path: ["confirmPassword"],
  });

  export type SignUpFormData = z.infer<typeof signupSchema>

const useSignup = () => {

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpFormData>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await authService.signUp(data.email, data.password, data.username);
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
