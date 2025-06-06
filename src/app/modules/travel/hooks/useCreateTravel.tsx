import { supabase } from '@/src/config/supabase';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const travelScheme = z.object({
  title: z.string().min(1, "O nome da viagem é obrigatório."),
  city: z.string().min(1, "Cidade / Estado é obrigatório."),
  hotel_address: z.string().min(1, "O endereço do hotel é obrigatório."),
  start_date :z.string().min(1, "A data de partida é obrigatória."),
  end_date:z.string().min(1, "A data de partida é obrigatória."),
})

export type TravelFormData = z.infer<typeof travelScheme>;

const useCreateTravel = () => {
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({resolver: zodResolver(travelScheme)})
  const [userId, setUserId] = useState<null | string>();
  
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUserId(data?.user?.id ?? null)
    }

    fetchUser();
  }, [])

  const createNewTravel =  async (data: TravelFormData) => {

  }

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    createNewTravel
  }
}

export default useCreateTravel;