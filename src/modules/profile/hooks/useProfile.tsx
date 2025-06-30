import { useEffect, useState } from "react";
import { authService } from "@/src/modules/auth/services/authService";
import { router } from "expo-router";
import { profileService } from "../services/profileService";
import { User } from "@/src/shared/types/user.type";

const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      await getUser();
    }

    loadProfile();
  }, [])

  const logout = async () => {
    try {
      await authService.signOut();

      router.replace("/(auth)/signin/page");
    } catch (error) {
      console.log(error)
    }
  };

  const getUser = async () => {
    setLoading(true);
    try {
      const { user } = await profileService.fetchUser();
      setLoading(false);
      setProfile({
        email: user?.email!,
        name: user?.user_metadata?.name ?? "",
        createdAt: new Date(user?.created_at!).toLocaleDateString('pt-BR')
      })

    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  return {
    logout,
    loading,
    profile,
  }
};

export default useProfile;
