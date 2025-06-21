import useDetailTravel from "@/src/modules/travel/hooks/useDetailTravel";
import DetailTravelScreen from "@/src/modules/travel/screens/detail";

export default function DetailTravel(){
  const { travel, loading, handleDeleteTravel } = useDetailTravel();

  return(
    <DetailTravelScreen
      travel={travel}
      loading={loading}
      handleDeleteTravel={handleDeleteTravel}
    />
  )
}