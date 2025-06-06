import { router } from "expo-router";
import { authService } from "@/src/services/authService";


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
