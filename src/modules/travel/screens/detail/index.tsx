import { Travel } from "@/src/shared/types/travel.type";
import { SafeAreaView, ScrollView, View } from "react-native";

import colors from "@/src/constants/colors";
import { Header } from "@/src/shared/components/header";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import styles from "./styles";

interface TravelDetailsScreenProps {
  travel: Travel;
  loading: boolean;
}

export default function DetailTravelScreen({ travel, loading }: TravelDetailsScreenProps){
  return(
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>

        <View style={styles.row}>
          <Link 
            href={'/(panel)/home/page'}
            style={styles.buttonBack}
          >
          <Feather name='arrow-left' size={30} color={colors.white} />
          </Link>
          <Header/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}