import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface AuthFooterProps {
  /** Text shown before the link, e.g. "Don't have an account?" */
  promptText: string;
  /** Text of the tappable link, e.g. "Sign Up" */
  linkText: string;
  /** Route to push when link is pressed */
  linkHref: '/(auth)/login' | '/(auth)/register';
}

export function AuthFooter({ promptText, linkText, linkHref }: AuthFooterProps) {
  return (
    <View style={styles.footer}>
      <Text style={styles.promptText}>{promptText}</Text>
      <TouchableOpacity onPress={() => router.replace(linkHref)}>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  promptText: {
    color: '#6B7280',
    fontSize: 14,
  },
  linkText: {
    color: '#1D4ED8',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 4,
  },
});
