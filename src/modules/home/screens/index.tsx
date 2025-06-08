import { Header } from '@/src/shared/components/header';
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Travel } from '@/src/shared/types/travel.type';

import colors from "@/src/constants/colors";
import styles from "./styles";

interface HomeScreenProps {
  travels: Travel[];
  loading: boolean;
}

export default function HomeScreen({ travels, loading }: HomeScreenProps) {
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
      </View>
    </SafeAreaView>
  );
}