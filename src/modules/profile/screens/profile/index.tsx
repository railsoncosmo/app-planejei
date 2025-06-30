import colors from '@/src/constants/colors';
import { Header } from '@/src/shared/components/header';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, View, Pressable, Text, ActivityIndicator } from 'react-native';
import { User } from '@/src/shared/types/user.type';
import styles from './styles';

interface ProfileScreenProps {
  logout: () => Promise<void>;
  loading: boolean;
  profile: User | null;
}

export default function ProfileScreen({ logout, loading, profile }: ProfileScreenProps){
  const router = useRouter();

  if(loading || !profile){
    return(
      <View style={styles.initialLoading}>
        <ActivityIndicator size="large" color={colors.orange} />
      </View>
    )
  }

  return(
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
        <View style={styles.row}>
        <Pressable 
          onPress={() => router.back()}
          style={styles.buttonBack}>
        <Feather name='arrow-left' size={30} color={colors.white} />
        </Pressable>
        <Header/>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Nome ompleto:</Text>
        <Text style={styles.value}>{profile?.name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{profile?.email}</Text>

        <Text style={styles.label}>Conta criada em:</Text>
        <Text style={styles.value}>{profile?.createdAt}</Text>
      </View>

      <View>
        <Pressable
          onPress={async () => await logout()}
          style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Sair da conta</Text>
        </Pressable>
      </View>
    </View>
  </SafeAreaView>
  )
}