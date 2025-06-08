import { authService } from "@/src/modules/auth/services/authService";
import { router } from "expo-router";


const useProfile = () => {
  const logout = async () => {
    try {
      await authService.signOut();

      router.replace("/(auth)/signin/page");
    } catch (error) {
      console.log(error)
    }
  };

  return {
    logout,
  }
};

export default useProfile;
