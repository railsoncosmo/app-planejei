import { Travel } from '@/src/shared/types/travel.type';
import { formatDateRange } from '@/src/shared/utils/travelCount';
import { Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './styles';

interface TravelProps {
  data: Travel;
}

const CardTravel = ({ data }: TravelProps) => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <Text style={styles.cardTextRange}>{formatDateRange(data.start_date, data.end_date)}</Text>
      <Text style={styles.city}>{data.city}</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.cardButton}
        onPress={() => router.push(`/(panel)/detail/${data.id}`)}
      >
        <Text style={styles.cardButtonText}>Acessar detalhes</Text>
      </TouchableOpacity>
    </View>
  )
}

export { CardTravel };

