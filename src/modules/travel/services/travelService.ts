import { supabase } from '@/src/config/supabase';
import { CreateTravelPayload } from '../../../shared/types/travel.type';
import { User } from '../../../shared/types/user.type';

export const travelService = {
  createTravel: async (payload: CreateTravelPayload, user_id: string | User) => {
    const { data, error } = await supabase.from("travels").insert([
      {
        ...payload,
        user_id: user_id,
      }
    ]);

    if(error){
      throw error;
    }

    return data;
  },

  getTravels: async (user_id: string) => {
    const { data, error } = await supabase.from("travels")
    .select('*')
    .eq('user_id', user_id)
    .order('start_date', { ascending: true })

    if(error){
      throw error;
    }

    return data;
  }
}