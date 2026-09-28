import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { AuthFooter } from '../../components/auth/AuthFooter';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthButton } from '../../components/buttons/AuthButton';
import { AuthDropdown } from '../../components/dropdowns/AuthDropdown';
import { AuthInput } from '../../components/inputs/AuthInput';

export function RegisterPage() {
  const [role, setRole] = React.useState('Retailer');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Back button */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>

        {/* Shared header — no illustration image on register to save space */}
        <AuthHeader
          title="Create Account"
          subtitle="Join DoodhSetu and start managing your milk business." showAppName={true}
        />

        {/* Register form */}
        <View style={styles.form}>
          <AuthInput
            label="Full Name"
            placeholder="Enter your full name"
            icon="person-outline"
          />

          <AuthInput
            label="Phone Number"
            placeholder="Enter your phone number"
            icon="call-outline"
            keyboardType="phone-pad"
          />

          <AuthInput
            label="Password"
            placeholder="Create a strong password"
            icon="lock-closed-outline"
            isPassword
          />

          <AuthDropdown
            label="Role"
            value={role}
            onPress={() => {
              // Cycle through roles for demo; wire to a modal or picker in production
              setRole(role === 'Retailer' ? 'Distributor' : 'Retailer');
            }}
          />

          <AuthButton
            title="Sign Up"
            style={styles.signUpButton}
            onPress={() => { }}
          />
        </View>

        {/* Shared footer */}
        <AuthFooter
          promptText="Already have an account?"
          linkText="Login"
          linkHref="/(auth)/login"
        />
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 24,
  },
  backButton: {
    marginTop: 16,
    marginBottom: 4,
    padding: 4,
    alignSelf: 'flex-start',
  },
  form: {
    marginBottom: 8,
  },
  signUpButton: {
    marginTop: 8,
  },
});
