import colors from '@/src/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  label: {
    color: colors.white,
    marginBottom: 4,
    fontWeight: "500",
  },
  input: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
  }
});

export default styles;