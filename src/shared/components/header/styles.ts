import colors from '@/src/constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    color: colors.orange,
    fontSize: 30,
    fontWeight: '600',
  },
  contentLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonAdd: {
    borderRadius: 99,
    padding: 8,
  },
});

export default styles;