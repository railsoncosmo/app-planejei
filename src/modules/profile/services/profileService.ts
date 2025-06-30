import { supabase } from "@/src/config/supabase"

export const profileService = {

  fetchUser: async () => {
    const { data, error } = await supabase.auth.getUser();

    if(error){
      throw error;
    }

    return data;
  }
}