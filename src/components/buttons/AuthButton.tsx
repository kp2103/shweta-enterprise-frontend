import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface AuthButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
  textStyle?: object;
  icon?: React.ReactNode;
}

export function AuthButton({ title, variant = 'primary', isLoading, style, textStyle, icon, ...props }: AuthButtonProps) {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isOutline = variant === 'outline';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary && styles.primaryButton,
        isSecondary && styles.secondaryButton,
        isOutline && styles.outlineButton,
        style
      ]}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={isPrimary ? '#FFFFFF' : '#1D4ED8'} />
      ) : (
        <>
          {icon && <View style={{ marginRight: 8 }}>{icon}</View>}
          <Text style={[
            styles.text,
            isPrimary && styles.primaryText,
            isSecondary && styles.secondaryText,
            isOutline && styles.outlineText,
            textStyle
          ]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: '#1D4ED8',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#1D4ED8',
  },
  outlineText: {
    color: '#4B5563',
  },
});
