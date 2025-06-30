import ProfileScreen from "@/src/modules/profile/screens/profile";
import useProfile from "@/src/modules/profile/hooks/useProfile";

export default function Profile() {
  const { logout, loading, profile } = useProfile();

  return (
    <ProfileScreen
      logout={logout}
      loading={loading}
      profile={profile}
    />
  );
}