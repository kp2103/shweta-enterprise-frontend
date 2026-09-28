import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AuthDropdownProps {
  label: string;
  value: string;
  onPress: () => void;
}

export function AuthDropdown({ label, value, onPress }: AuthDropdownProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.inputContainer} onPress={onPress}>
        <Text style={styles.value}>{value}</Text>
        <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    height: 50,
    paddingHorizontal: 12,
  },
  value: {
    fontSize: 16,
    color: '#1F2937',
  },
});
