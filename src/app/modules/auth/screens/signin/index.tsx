import { SignInFormData } from "@/src/app/modules/auth/hooks/useSignin";
import colors from "@/src/constants/colors";
import { Link } from "expo-router";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";

interface SignInScreenProps {
  control: Control<SignInFormData>;
  onSubmit: (data: SignInFormData) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<SignInFormData>;
  isSubmitting: boolean;
  errors: FieldErrors<SignInFormData>;
}

export default function SignInScreen({
  control,
  errors,
  handleSubmit,
  isSubmitting,
  onSubmit,
}: SignInScreenProps) {
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
          source={require("@/assets/logo.png")}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Digite seu email..."
                placeholderTextColor={colors.gray50}
                autoCapitalize="none"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email?.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="*******"
                secureTextEntry={true}
                placeholderTextColor={colors.gray50}
                autoCapitalize="none"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password?.message}</Text>
              )}
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          {isSubmitting ? (
            <ActivityIndicator size={"small"} color={colors.zinc}/>
          ) : (
            <Text style={styles.buttonText}>Acessar conta</Text>
          )}
        </TouchableOpacity>

        <Link style={styles.link} href="/(auth)/signup/page">
          Ainda não possuí uma conta? Cadastre-se
        </Link>
      </View>
    </ScrollView>
  );
}
