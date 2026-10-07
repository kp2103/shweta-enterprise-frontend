import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const BLUE = '#1D4ED8';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Top Section
  topSection: {
    alignItems: 'center',
    marginTop: height * 0.1,
    paddingHorizontal: 20,
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  tagline: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Image Section
  imageSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
  },
  bottleImage: {
    width: width * 0.9,
    height: height * 0.45,
  },

  // Bottom Section
  bottomSection: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '500',
  },
});
