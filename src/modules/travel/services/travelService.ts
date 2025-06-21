import { supabase } from '@/src/config/supabase';
import { CreateTravelPayload, Travel } from '../../../shared/types/travel.type';
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

  getTravels: async (user_id: string): Promise<Travel[]> => {
    const today = new Date().toISOString().split("T")[0];
    const { data, error } = await supabase.from("travels")
    .select('*')
    .eq('user_id', user_id)
    .gte('end_date', today)
    .order('start_date', { ascending: true })

    if(error){
      throw error;
    }

    return data;
  },

  getTravelById: async (travel_id: string): Promise<Travel | null> => {
    const { data, error } = await supabase.from("travels")
    .select("*")
    .eq("id", travel_id)
    .single()

    if(error){
      throw error;
    }
    
    return data;
  },

  deleteTravelById: async (travel_id: string): Promise<void> => {
    const { error } = await supabase.from("travels").delete()
    .eq("id", travel_id);

    if(error){
      throw error;
    }
  }
}