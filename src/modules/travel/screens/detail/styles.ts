import colors from "@/src/constants/colors";
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  initialLoading: {
      flex: 1,
      backgroundColor: colors.zinc,
      justifyContent: 'center',
      alignItems: 'center',
    },
  safeArea: {
      flex: 1,
      backgroundColor: colors.zinc,
      padding: Platform.OS === 'ios' ? 16 : 0
    },
    container: {
      flex: 1,
      padding: 16,
      marginTop: 40,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 14,
    },
    buttonBack: {
      borderRadius: 99,
      padding: 8,
      backgroundColor: colors.orange,
    },
    heading: {
      color:colors.white,
      fontSize: 24,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    date: {
      color: colors.white,
      fontSize: 16,
      marginLeft: 8,
    },
    card: {
      backgroundColor: colors.white,
      padding: 16,
      borderRadius: 4,
      marginTop: 16,
      marginBottom: 16,
    },
    label: {
      color: colors.zinc,
      marginBottom: 4,
    },
    value: {
      color: colors.black,
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 8,
    },
    deleteButton: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.red,
      borderRadius: 4,
      padding: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    deleteButtonText: {
      color: colors.red,
      fontWeight: '500',
    },
    sectionTitle: {
      color: colors.white,
      fontSize: 18,
      marginBottom: 8,
      fontWeight: '600',
    },
    reminderInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.gray200,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 14,
      paddingTop: 8,
      paddingBottom: 8,
    },
    reminderInput: {
      flex: 1,
      color: colors.white,
      paddingVertical: 8,
    },
    addButton: {
      backgroundColor: colors.orange,
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: 4,
    },
    spacingVertical: {
      marginBottom: 14,
    },
    reminderItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.gray200,
      padding: 10,
      borderRadius: 8,
      marginBottom: 14,
    },
    reminderText: {
      color: colors.white,
      flex: 1,
    },
});

export default styles;