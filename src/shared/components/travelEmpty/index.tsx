import { SafeAreaView, View, Text, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Header } from "@/src/shared/components/header";;
import { Link } from "expo-router";
import colors from "@/src/constants/colors";
import styles from "../../../modules/home/screens/styles";

const TravelEmpty = () => {
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
      <View style={styles.highlightCard}>
        <Text style={styles.highlightText}>Nenhuma viagem programada.</Text>
      </View>
        </View>
      </SafeAreaView>
  )
}

export { TravelEmpty };