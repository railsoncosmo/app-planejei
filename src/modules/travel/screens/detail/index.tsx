import { Travel } from "@/src/shared/types/travel.type";
import { ActivityIndicator, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";

import colors from "@/src/constants/colors";
import { Header } from "@/src/shared/components/header";
import { formatedDate } from "@/src/shared/utils/travelCount";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import styles from "./styles";
import { Reminder } from "@/src/shared/types/reminder.type";

interface TravelDetailsScreenProps {
  travel: Travel | null;
  loading: boolean;
  handleDeleteTravel: () => Promise<void>;
  remindersHook: {
    loading: boolean;
    newReminder: string;
    setNewReminder: (value: string) => void;
    addReminder: () => Promise<void>;
    reminders: Reminder[];
    deleteReminder: (reminder_id: string) => Promise<void>;
  }
}

export default function DetailTravelScreen({ 
  travel, 
  loading, 
  handleDeleteTravel,
  remindersHook,
}: TravelDetailsScreenProps){
  
  if(loading || !travel){
    return (
      <View style={styles.initialLoading}>
        <ActivityIndicator size="large" color={colors.orange} />
      </View>
    )
  }

  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.row}>
          <Link 
            href={'/(panel)/home/page'}
            style={styles.buttonBack}
          >
          <Feather name='arrow-left' size={30} color={colors.white} />
          </Link>
          <Header/>
        </View>

        <View>
          <Text style={[styles.heading, { marginTop: 14 }]}>
            Detalhes da sua viagem para
          </Text>
          <Text style={[styles.heading, { fontWeight: '600', marginBottom: 14 }]}>{travel?.city}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="airplane-takeoff" size={24} color={colors.white}/>
            <Text style={styles.date}>{formatedDate(travel?.start_date)}</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="airplane-landing" size={24} color={colors.white}/>
            <Text style={styles.date} >{formatedDate(travel?.end_date)}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Cidade:</Text>
            <Text style={styles.value}>{travel?.city}</Text>

            <Text style={styles.label}>Hotel:</Text>
            <Text style={styles.value}>{travel?.hotel_address}</Text>

            <Pressable 
              style={styles.deleteButton}
              onPress={async () => await handleDeleteTravel()}
            >
              <Text style={styles.deleteButtonText}>Excluir viagem</Text>
            </Pressable>
          </View>

          <Text style={styles.sectionTitle}>Lembretes</Text>
          <View style={styles.reminderInputContainer}>
            <TextInput
              style={styles.reminderInput}
              placeholder="Adicione um lembrete"
              placeholderTextColor={colors.gray100}
              value={remindersHook.newReminder}
              onChangeText={(value) => remindersHook.setNewReminder(value)}
            />
            <Pressable 
              style={styles.addButton}
              onPress={async () => await remindersHook.addReminder()}  
            >
              <Text style={{ color: colors.white, fontSize: 18 }}>+</Text>
            </Pressable>
          </View>

          <View style={styles.spacingVertical}>
            {remindersHook.reminders.map((item) => (
              <View style={styles.reminderItem} key={item.id}>
                <Text style={styles.reminderText}>
                  {item.description}
                </Text>
              <Pressable
                onPress={async () => await remindersHook.deleteReminder(item.id)}
              >
                <Feather name="trash" size={25} color={colors.red}/>
              </Pressable>
            </View>
            ))}
          </View>


        </ScrollView>
      </View>
    </SafeAreaView>
  )
}