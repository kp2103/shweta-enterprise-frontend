import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AuthButton } from '../../../components/buttons/AuthButton';
import { AuthInput } from '../../../components/inputs/AuthInput';
import { styles } from '../../../screens/LoginPage/LoginPage.styles';

export function LoginForm() {
  const [isChecked, setIsChecked] = React.useState(true);

  return (
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
  );
}
