import colors from '@/src/constants/colors';
import { Platform, StyleSheet } from 'react-native';

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
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  highlightCard: {
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  highlightText: {
    color: colors.zinc,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
});

export default styles;