import colors from '@/src/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.gray200,
    padding: 20,
    borderRadius: 8,
    marginBottom: 14,
  },
  cardTextRange: {
    color: colors.white,
    marginBottom: 8,
  },
  city: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 14,
  },
  cardButton: {
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtonText: {
    color: colors.zinc,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;