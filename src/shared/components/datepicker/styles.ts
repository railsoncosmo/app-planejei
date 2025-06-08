import colors from '@/src/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    marginBottom: 16,
  },
  label: {
    color: colors.white,
    marginBottom: 4,
    fontWeight: "500",
  },
  input: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 4,
  },
  placeholderInput: {
    color: colors.gray50, 
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 24,
  },
  modalContainer: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 16,
  },
  closeCalendar: {
    marginTop: 16,
    marginBottom: 8,
    alignItems: 'center',
  },
  closeCalendarText: {
    color: 'red',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;