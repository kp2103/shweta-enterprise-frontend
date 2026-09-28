import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D4ED8', // Dark blue background
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
  },
  logoIcon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E7FF',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  tagline: {
    fontSize: 12,
    color: '#93C5FD',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImage: {
    width: 250,
    height: 250,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#FFFFFF',
    marginTop: 16,
    opacity: 0.8,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 20,
    opacity: 0.9,
  },
  startButton: {
    width: '100%',
  }
});
