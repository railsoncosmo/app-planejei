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
  subTitle: {
    fontSize: 28,
    color: colors.white,
    marginTop: 14,
    marginBottom: 14,
    fontWeight: "500",
  },
  field: {
    marginBottom: 12,
  },
  detailsTravel: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 16,
    marginBottom: 14,
  },
  button: {
    backgroundColor: colors.orange,
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  labelError: {
    color: colors.red,
    marginTop: 3,
  },
})

export default styles;