import ProfileScreen from "@/src/app/modules/profile/screens/profile";
import useProfile from "@/src/app/modules/profile/hooks/useProfile";

export default function Profile() {
  const { logout } = useProfile();

  return (
    <ProfileScreen/>
  );
}