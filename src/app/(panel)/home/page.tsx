import HomeScreen from "@/src/modules/home/screens";
import useTravel from "@/src/modules/travel/hooks/useTravel";

export default function Home() {
  const { travels, loading } = useTravel();

  return (
    <HomeScreen
      travels={travels}
      loading={loading}
    />
  );
}