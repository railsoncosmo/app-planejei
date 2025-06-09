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
  rangeText: {
    color: colors.gray,
  },
  highlightCity: {
    color: colors.zinc,
    fontWeight: '600',
    fontSize: 18,
    marginTop: 14,
    marginBottom: 14,
  },
  highlightButton: {
    backgroundColor: colors.orange,
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 14,
    marginBottom: 8,
  },
});

export default styles;