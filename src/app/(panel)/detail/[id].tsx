import useDetailTravel from "@/src/modules/travel/hooks/useDetailTravel";
import useReminders from "@/src/modules/travel/hooks/useReminders";
import DetailTravelScreen from "@/src/modules/travel/screens/detail";

export default function DetailTravel(){
  const { travel, loading, handleDeleteTravel } = useDetailTravel();
  const remindersHook = useReminders();

  return(
    <DetailTravelScreen
      travel={travel}
      loading={loading}
      handleDeleteTravel={handleDeleteTravel}
      remindersHook={remindersHook}
    />
  )
}