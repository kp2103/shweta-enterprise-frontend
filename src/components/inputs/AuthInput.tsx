import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AuthInputProps extends TextInputProps {
  label?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  isPassword?: boolean;
}

export function AuthInput({ label, icon, isPassword, ...props }: AuthInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color="#9CA3AF"
            style={styles.icon}
          />
        )}
        <TextInput
          style={styles.input}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 6,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    height: 50,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 10,
  },
  eyeIcon: {
    padding: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
});
