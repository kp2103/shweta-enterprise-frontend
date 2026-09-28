import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  form: {
    flex: 1,
  },
  registerButton: {
    marginTop: 10,
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  footerText: {
    color: '#6B7280',
    fontSize: 14,
  },
  footerLink: {
    color: '#1D4ED8',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});
