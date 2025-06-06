import { useState } from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Calendar } from 'react-native-calendars';

import colors from '@/src/constants/colors';
import styles from './styles';

interface DatePickerProps {
  label: string;
  minDate?: string;
  value: string;
  onChange: (date: string) => void;
}

const DatePicker = ({ label, minDate, value, onChange }: DatePickerProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  function handleDayPress(day: { dateString: string }){
    onChange(day.dateString)
    setModalVisible(false);
  }

  return(
    <View style={styles.safeArea}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity 
        style={styles.input}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.placeholderInput}>
          { value ? new Intl.DateTimeFormat("pt-BR").format(new Date(value)) : "Selecionar a data..."}
        </Text>
      </TouchableOpacity>

      <Modal 
        visible={modalVisible}
        transparent
        animationType='fade'
      >
        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>
            <Calendar
              onDayPress={handleDayPress}
              minDate={ minDate ?? new Date().toISOString().split("T")[0]}
              markedDates={
                value ? {
                  [value]: {
                    selected: true,
                    selectedColor: colors.orange,
                    marked: true,
                  }
                } : {}
              }
            />

            <TouchableOpacity
              style={styles.closeCalendar}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeCalendarText}>Cancelar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    </View>
  )
}

export { DatePicker };

