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
    marginBottom: 16,
  },
  buttonBack: {
    borderRadius: 99,
    padding: 8,
    backgroundColor: colors.orange,
  },
  card: {
    backgroundColor: colors.gray200,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: colors.white,
  },
  value: {
    color: colors.gray100,
    marginBottom: 14,
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: colors.red,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    color: colors.red, 
  },
})

export default styles;