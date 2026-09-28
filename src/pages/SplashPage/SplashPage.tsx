import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

export function SplashPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/login' as any);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0b4694" />

      {/* Top Section — Logo & Text */}
      <View style={styles.topSection}>
        <MaterialCommunityIcons name="bottle-tonic-outline" size={54} color="#FFFFFF" />
        <Text style={styles.title}>DoodhSetu</Text>
        <Text style={styles.subtitle}>
          Milk Distribution & Retail{'\n'}Management System
        </Text>
        <Text style={styles.tagline}>Better Supply • Stronger Retail • Together</Text>
      </View>

      {/* Bottom Section — Milk Bottle Illustration */}
      <View style={styles.bottomSection}>
        <Image
          source={require('../../../assets/images/splash-art.jpg')}
          style={styles.splashImage}
          resizeMode="contain"
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Connecting Dairies to Every Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b4694',
  },
  topSection: {
    alignItems: 'center',
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 8,
    fontWeight: '400',
  },
  tagline: {
    fontSize: 11,
    color: '#93bde6',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  splashImage: {
    width: '100%',
    height: '100%',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 30,
    backgroundColor: '#0b4694',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    opacity: 0.8,
  },
});
