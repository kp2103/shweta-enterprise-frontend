import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthFooter } from '../../components/auth/AuthFooter';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthButton } from '../../components/buttons/AuthButton';
import { AuthInput } from '../../components/inputs/AuthInput';

export function LoginPage() {
  const [isChecked, setIsChecked] = React.useState(true);

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
          {/* Shared header with image, icon, app name, title, subtitle */}
          <AuthHeader
            title="Welcome Back"
            subtitle="Please login to your account"
            showAppName={true}
          />

          {/* Form */}
          <View style={styles.form}>
            <AuthInput
              label="Phone Number"
              placeholder="Enter your phone number"
              icon="call-outline"
              keyboardType="phone-pad"
            />

            <AuthInput
              label="Password"
              placeholder="Enter your password"
              icon="lock-closed-outline"
              isPassword
            />

            {/* Remember me + Forgot password */}
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.rememberContainer}
                onPress={() => setIsChecked(!isChecked)}
              >
                <MaterialCommunityIcons
                  name={isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
                  size={24}
                  color={isChecked ? '#1D4ED8' : '#9CA3AF'}
                />
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <AuthButton title="Login" onPress={() => { }} />

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Google sign-in */}
            <AuthButton
              title="Continue with Google"
              variant="outline"
              icon={<Ionicons name="logo-google" size={20} color="#4285F4" />}
              textStyle={styles.googleButtonText}
              onPress={() => { }}
            />
          </View>

          {/* Shared footer */}
          <AuthFooter
            promptText="Don't have an account?"
            linkText="Sign Up"
            linkHref="/(auth)/register"
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
  form: {
    marginBottom: 8,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4B5563',
  },
  forgotText: {
    fontSize: 14,
    color: '#1D4ED8',
    fontWeight: '500',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#9CA3AF',
    fontSize: 12,
  },
  googleButtonText: {
    color: '#4B5563',
  },
});
