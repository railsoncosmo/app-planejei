import { useEffect, useState } from 'react';

import { authService } from '@/src/modules/auth/services/authService';
import { travelService } from '@/src/modules/travel/services/travelService';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { TravelFormData, travelScheme } from '@/src/shared/types/travel.type';
import { User } from '@/src/shared/types/user.type';

import { router } from 'expo-router';

const useCreateTravel = () => {
  const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({resolver: zodResolver(travelScheme)})
  const [userId, setUserId] = useState<User | string>();
  
  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await authService.fetchUser();
      setUserId(user?.id ?? null)
    }

    fetchUser();
  }, [])

  const createNewTravel =  async (data: TravelFormData) => {
    if(!userId){
      return;
    }

    try{
      await travelService.createTravel(data, userId)
      reset();
      router.replace("/(panel)/home/page")
    }catch(error){
      console.log('Erro ao criar a viagem', error);
    }
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