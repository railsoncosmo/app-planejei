import colors from "@/src/constants/colors";
import { SignUpFormData } from "@/src/shared/types/auth.type";
import { Link } from "expo-router";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";

interface SignUpScreenProps {
  control: Control<SignUpFormData>;
  onSubmit: (data: SignUpFormData) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<SignUpFormData>;
  isSubmitting: boolean;
  errors: FieldErrors<SignUpFormData>;
}

export default function SignUpScreen({
  control,
  errors,
  handleSubmit,
  isSubmitting,
  onSubmit,
}: SignUpScreenProps) {
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
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Nome completo"
                placeholderTextColor={colors.gray50}
                autoCapitalize="none"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
              {errors.username && (
                <Text style={styles.errorText}>{errors.username?.message}</Text>
              )}
            </View>
          )}
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
                placeholder="Senha"
                placeholderTextColor={colors.gray50}
                autoCapitalize="none"
                secureTextEntry={true}
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
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Confirme a senha"
                placeholderTextColor={colors.gray50}
                autoCapitalize="none"
                secureTextEntry={true}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
              {errors.confirmPassword && (
                <Text style={styles.errorText}>
                  {errors.confirmPassword?.message}
                </Text>
              )}
            </View>
          )}
        />

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>

        <Link style={styles.link} href="/(auth)/signin/page">
          Já possuí uma conta? Faça o login
        </Link>
      </View>
    </ScrollView>
  );
}
