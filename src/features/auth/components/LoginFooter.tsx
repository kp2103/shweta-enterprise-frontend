import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../pages/LoginPage/LoginPage.styles';

export function LoginFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
        <Text style={styles.footerLink}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
