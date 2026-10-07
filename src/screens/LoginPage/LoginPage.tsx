import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthFooter } from '../../components/auth/AuthFooter';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AuthButton } from '../../components/buttons/AuthButton';
import { AuthInput } from '../../components/inputs/AuthInput';
import { styles } from './LoginPage.styles';

export function LoginPage() {
  const [isChecked, setIsChecked] = React.useState(true);

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


