import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },

  // Back button
  backButton: {
    marginTop: 16,
    marginBottom: 20,
    padding: 4,
    alignSelf: 'flex-start',
  },

  // Header — left-aligned like the target UI
  header: {
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },

  // Form
  form: {
    marginBottom: 8,
  },

  signUpButton: {
    marginTop: 8,
  },
});
