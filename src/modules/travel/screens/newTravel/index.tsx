import { Link } from 'expo-router';
import { Control, Controller, FieldErrors, UseFormHandleSubmit, useWatch } from 'react-hook-form';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import colors from '@/src/constants/colors';
import { DatePicker } from '@/src/shared/components/datepicker';
import { Header } from '@/src/shared/components/header';
import { Input } from '@/src/shared/components/Input';
import { Feather } from '@expo/vector-icons';
import { TravelFormData } from '@/src/shared/types/travel.type';
import styles from './styles';

interface NewTravelScreenProps {
  control: Control<TravelFormData>;
  handleSubmit: UseFormHandleSubmit<TravelFormData>;
  erros: FieldErrors<TravelFormData>;
  isSubmitting: boolean;
  createNewTravel: (data: TravelFormData) => Promise<void>;
} 

export default function NewTravelScreen({ control, createNewTravel, erros, handleSubmit, isSubmitting }: NewTravelScreenProps) {
  const startDate = useWatch({
    control,
    name: 'start_date'
  })
  
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
            <View style={styles.field}>
              <Input
              label='Objetivo da viagem'
              placeholder='Digite o titulo da viagem'
              placeholderTextColor={colors.gray50}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
            {erros.title && <Text style={styles.labelError}>{erros.title?.message}</Text>}
            </View>
          )}
        />

        <Controller
          control={control}
          name='city'
          render={({field: { onChange, onBlur, value }}) => (
            <View style={styles.field}>
            <Input
              label='Cidade e estado'
              placeholder='Digite a cidade e o estado...'
              placeholderTextColor={colors.gray50}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
            {erros.city && <Text style={styles.labelError}>{erros.city?.message}</Text>}
            </View>
          )}
        />

        <Text style={styles.detailsTravel}>Detalhes da viagem</Text>

        <Controller
          control={control}
          name='hotel_address'
          render={({field: { onChange, onBlur, value }}) => (
            <View style={styles.field}>
            <Input
              label='Endereço do hotel'
              placeholder='Digite o endereço do hortel...'
              placeholderTextColor={colors.gray50}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
            {erros.hotel_address && <Text style={styles.labelError}>{erros.hotel_address?.message}</Text>}
            </View>
          )}
        />

        <Controller
          control={control}
          name='start_date'
          render={({field: { onChange, onBlur, value }}) => (
            <>
            <DatePicker
              label='Selecione a data de ida'
              value={value}
              onChange={onChange}
            />
            {erros.start_date && <Text style={styles.labelError}>{erros.start_date?.message}</Text>}
            </>
          )}
        />

        {startDate && (
          <Controller
          control={control}
          name='end_date'
          render={({field: { onChange, onBlur, value }}) => (
            <>
            <DatePicker
              label='Selecione a data de volta'
              value={value}
              onChange={onChange}
              minDate={startDate}
            />
            {erros.end_date && <Text style={styles.labelError}>{erros.end_date?.message}</Text>}
            </>
          )}
        />
        )}

        <TouchableOpacity 
          style={styles.button}
          onPress={handleSubmit(createNewTravel)}
        >
          <Text style={styles.buttonText}>{ isSubmitting ? "Carregando..." : "Cadastrar viagem"}</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}