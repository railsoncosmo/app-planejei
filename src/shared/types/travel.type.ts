import { z } from "zod";

export interface CreateTravelPayload {
  title: string;
  city: string;
  hotel_address: string;
  start_date: string;
  end_date: string;
}

export interface Travel {
  id: string;
  user_id: string;
  title: string;
  city: string;
  hotel_address: string;
  start_date: string;
  end_date: string;
  created_at: string;
}

export const travelScheme = z.object({
  title: z.string({ required_error: "Esse campo não pode ser vazio."}).min(3, "O nome deve ter pelo menos 3 caracteres"),
  city: z.string({ required_error: "Esse campo não pode ser vazio."}).min(3, "A Cidade/Estado deve ter pelo menos 3 caracteres"),
  hotel_address: z.string({ required_error: "Esse campo não pode ser vazio."}).min(3, "O endereço do hotel deve ter pelo menos 3 caracteres"),
  start_date :z.string({ required_error: "Esse campo não pode ser vazio."}).nonempty("A data de ida é obrigatória"),
  end_date:z.string({ required_error: "Esse campo não pode ser vazio."}).nonempty("A data de volta é obrigatória"),
})

export type TravelFormData = z.infer<typeof travelScheme>;