import { Header } from '@/src/shared/components/header';
import { Travel } from '@/src/shared/types/travel.type';
import { countDayTravel, formatDateRange } from '@/src/shared/utils/travelCount';
import { Feather } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import colors from "@/src/constants/colors";
import { CardTravel } from '@/src/modules/home/components/CardTravel';
import { TravelEmpty } from '@/src/shared/components/travelEmpty';
import styles from "./styles";

interface HomeScreenProps {
  travels: Travel[];
  loading: boolean;
}

export default function HomeScreen({ travels, loading }: HomeScreenProps) {
  const router = useRouter();
  const [nextTravel, ...otherTravels] = travels;

  if(loading){
    return (
      <View style={styles.initialLoading}>
        <ActivityIndicator size="large" color={colors.orange} />
      </View>
    )
  }
  

  if (!nextTravel) {
    return (
      <TravelEmpty/>
    );
  }

  const startDate = nextTravel.start_date;
  const endDate = nextTravel.end_date;
  const status = countDayTravel(startDate, endDate);
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.zinc} barStyle={"light-content"} />

        <View style={styles.contentHeader}>
          <Header/>
          <View style={styles.contentLinks}>
            <Link
              href={'/(panel)/profile/page'}
              style={styles.buttonAdd}
              >
              <Feather name='home' size={30} color={colors.white} />
            </Link>

            <Link
              href={'/(panel)/travel/new/page'}
              style={[styles.buttonAdd, { backgroundColor: colors.orange }]}
            >
              <Feather name='plus' size={30} color={colors.white} />
            </Link>
        </View>
      </View>
        {nextTravel && (
          <View style={styles.highlightCard}>
            <Text style={styles.highlightText}>{status}</Text>
            <Text style={styles.rangeText}>{formatDateRange(nextTravel.start_date, nextTravel.end_date)}</Text>
            <Text style={styles.highlightCity}>{nextTravel.city}</Text>
            <TouchableOpacity
              style={styles.highlightButton}
              activeOpacity={1}
              onPress={() => router.push(`/(panel)/detail/${nextTravel.id}`)}
            >
              <Text style={styles.highlightButtonText}>Acessar detalhes</Text>
            </TouchableOpacity>
          </View>
        )}

        {otherTravels.length > 0 && (
          <>
          <Text style={styles.subtitle}>Outras viagens</Text>
          <FlatList
            data={otherTravels}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <CardTravel data={item}/>
            )}
          />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}