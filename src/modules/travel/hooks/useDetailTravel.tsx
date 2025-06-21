import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Travel } from '@/src/shared/types/travel.type';
import { travelService } from '../services/travelService';

const useDetailTravel = () => {
  const [travel, setTravel] = useState<Travel | null>(null);
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

  const onDelete = async () => {
    try {
      await travelService.deleteTravelById(id);
      router.replace("/(panel)/home/page");
    } catch (error) {
      console.log('Erro ao deletar a viagem', error);
    }
  }

  const handleDeleteTravel = async () => {
    Alert.alert(
      "Excluir viagem",
      "Tem certeza que deseja excluir essa viagem?",
      [
        { text: "Não", style: "cancel"},
        { text: "Excluir", onPress: async () => await onDelete() }
      ]
    )
  }

  return {
    travel,
    loading,
    handleDeleteTravel,
  }
}

export default useDetailTravel;