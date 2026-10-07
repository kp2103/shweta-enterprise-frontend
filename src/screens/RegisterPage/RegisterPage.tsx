import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthFooter } from '../../components/auth/AuthFooter';
import { AuthButton } from '../../components/buttons/AuthButton';
import { AuthDropdown } from '../../components/dropdowns/AuthDropdown';
import { AuthInput } from '../../components/inputs/AuthInput';
import { styles } from './RegisterPage.styles';

const ROLE_OPTIONS = [
  {
    label: 'Retailer',
    value: 'Retailer',
    icon: 'storefront-outline' as const,
    description: 'Sell milk products to end customers',
  },
  {
    label: 'Distributor',
    value: 'Distributor',
    icon: 'car-outline' as const,
    description: 'Distribute milk from dairies to retailers',
  },
];

export function RegisterPage() {
  const [role, setRole] = React.useState('Retailer');

  return (
    <SafeAreaView style={styles.container}>
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
            <Ionicons name="arrow-back" size={22} color="#1F2937" />
          </TouchableOpacity>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>
              Join DoodhSetu and start managing your milk business.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <AuthInput
              label="Full Name"
              placeholder="Enter your full name"
              icon="person-outline"
              autoCapitalize="words"
            />

            <AuthInput
              label="Email"
              placeholder="Enter your email address"
              icon="mail-outline"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <AuthInput
              label="Phone Number"
              placeholder="Enter your phone number"
              icon="call-outline"
              keyboardType="phone-pad"
              maxLength={10}
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
              options={ROLE_OPTIONS}
              onSelect={setRole}
              placeholder="Select your role"
            />

            <AuthButton
              title="Sign Up"
              onPress={() => { }}
              style={styles.signUpButton}
            />
          </View>

          {/* Footer */}
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
