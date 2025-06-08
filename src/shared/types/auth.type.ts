
import { z } from "zod";

export const signinSchema = z.object({
  email: z
    .string()
    .email("Digite um e-mail válido.")
    .min(1, "O e-mail é obrigatório."),
  password: z.string().min(1, "A senha é obrigatória.").nonempty("A senha é obrigatória."),
});

export type SignInFormData = z.infer<typeof signinSchema>;

export const signupSchema = z
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