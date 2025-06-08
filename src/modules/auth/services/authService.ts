import { supabase } from "@/src/config/supabase";

export const authService = {

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if(error){
      throw error;
    }

    return data;
  },

  signUp: async (email: string, password: string, username: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: username,
        }
      }
    });

    if (error) {
      throw error;
    }
    return data;
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    return true;
  },

  fetchUser: async () => {
    const { data, error } = await supabase.auth.getUser();

    if(error){
      throw error;
    }

    return data;
  }
};
