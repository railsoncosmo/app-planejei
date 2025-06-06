import HomeScreen from "@/src/app/modules/home/screens/panel";
import useProfile from "@/src/app/modules/profile/hooks/useProfile";

export default function Home() {
  const { logout } = useProfile();

  return (
    <HomeScreen/>
  );
}