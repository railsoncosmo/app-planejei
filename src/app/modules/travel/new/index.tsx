import { Link } from 'expo-router';
import { Control, Controller, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import colors from '@/src/constants/colors';
import { Header } from '@/src/shared/components/header';
import { Input } from '@/src/shared/components/Input';
import { Feather } from '@expo/vector-icons';
import { TravelFormData } from '../hooks/useCreateTravel';
import styles from './styles';

interface NewTravelScreenProps {
  control: Control<TravelFormData>;
  handleSubmit: UseFormHandleSubmit<TravelFormData>;
  erros: FieldErrors<TravelFormData>;
  isSubmitting: boolean;
  createNewTravel: (data: TravelFormData) => Promise<void>;
} 

export default function NewTravelScreen({ control, createNewTravel, erros, handleSubmit, isSubmitting }: NewTravelScreenProps) {
  return (
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

        <Text style={styles.subTitle}>
          Vamos cadastrar sua próxima viagem
        </Text>

        <Controller
          control={control}
          name='title'
          render={({field: { onChange, onBlur, value }}) => (
            <Input
              label='Objetivo da viagem'
              placeholder='Digite o titulo da viagem'
              placeholderTextColor={colors.gray50}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />

      </ScrollView>
    </SafeAreaView>
  );
}