import colors from "@/src/constants/colors";
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
});

export default styles;