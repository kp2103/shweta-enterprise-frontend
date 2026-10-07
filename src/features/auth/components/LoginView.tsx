import { Ionicons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthFooter } from '../../../components/auth/AuthFooter';
import { AuthHeader } from '../../../components/auth/AuthHeader';
import { AuthButton } from '../../../components/buttons/AuthButton';
import { AuthInput } from '../../../components/inputs/AuthInput';
import { styles } from '../../../screens/LoginPage/LoginPage.styles';
import { loginApiRequestSchema, type LoginApiRequestSchema } from '../api/authApiSchema';
import { useLogin } from '../hooks/useLogin';

export function LoginView() {
  const { mutate: login, isPending } = useLogin();

  const { control, handleSubmit, formState: { errors } } = useForm<LoginApiRequestSchema>({
    resolver: zodResolver(loginApiRequestSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: LoginApiRequestSchema) => {
    login(data);
  };

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

          <View style={styles.form}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <AuthInput
                    label="Email"
                    placeholder="Enter your Email Address"
                    icon="mail-outline"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                  {errors.email && <Text style={{ color: 'red', fontSize: 12, marginTop: -12, marginBottom: 16, marginLeft: 4 }}>{errors.email.message}</Text>}
                </View>
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <AuthInput
                    label="Password"
                    placeholder="Enter your password"
                    icon="lock-closed-outline"
                    isPassword
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                  {errors.password && <Text style={{ color: 'red', fontSize: 12, marginTop: -12, marginBottom: 16, marginLeft: 4 }}>{errors.password.message}</Text>}
                </View>
              )}
            />

            <View style={styles.optionsRow}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <AuthButton
              title="Login"
              onPress={handleSubmit(onSubmit)}
              isLoading={isPending}
            />

            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>

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
