import { authService } from "@/src/modules/auth/services/authService";
import { travelService } from "@/src/modules/travel/services/travelService";
import { Travel } from "@/src/shared/types/travel.type";
import { useEffect, useState } from "react";

const useTravel = () => {
  const [travels, setTravels] = useState<Travel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true)
      const { user } = await authService.fetchUser();

      if(!user) return;

      try {
        const data = await travelService.getTravels(user.id)
        setTravels(data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }
    fetchData()
  }, [])

  return {
    travels,
    loading
  }
}

export default useTravel;