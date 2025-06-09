import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Travel } from '@/src/shared/types/travel.type';
import { travelService } from '../services/travelService';

const useDetailTravel = () => {
  const [travel, setTravel] = useState<Travel | null>();
  const [loading, setLoading] = useState(true);
  const { id } = useLocalSearchParams<{id: string}>();

  useEffect(() => {
    const fetchData = async () => {
      try{

        setLoading(true);
        const data = await travelService.getTravelById(id);
        setTravel(data)
        setLoading(false)

      }catch(error){
        console.log(`Erro ao buscar dados da viagem`, error)
        setLoading(false)
      }
    }

    fetchData();
  }, [id])

  return {
    travel,
    loading
  }
}

export default useDetailTravel;