import colors from "@/src/constants/colors";
import styles from "./style";
import { Link } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export function SignInScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: colors.zinc }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.zinc} />

        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />

        <View>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email..."
            placeholderTextColor={colors.gray50}
            autoCapitalize="none"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="********"
            placeholderTextColor={colors.gray50}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity 
          style={styles.button}>
          <Text style={styles.buttonText}>Acessar conta</Text>
        </TouchableOpacity>

        <Link 
          style={styles.link}
          href="/(auth)/signup/page"
        >
          Ainda não possuí uma conta? Cadastre-se
        </Link>

      </View>
    </ScrollView>
  );
}
