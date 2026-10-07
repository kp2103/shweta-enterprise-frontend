import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { useGetMe } from './hook/useGetMe';
import { styles } from './SplashPage.styles';

export function SplashPage() {
  const { user, isLoading, error } = useGetMe();

  // Handle routing once fetching is done
  useEffect(() => {
    console.log('[SplashPage] Current fetching state -> isLoading:', isLoading);
    if (error) {
      console.log('[SplashPage] Fetch Error Details:', error.message);
      console.log('[SplashPage] BACKEND_BASE_URL is:', process.env.BACKEND_BASE_URL);
      console.log('[SplashPage] EXPO_PUBLIC_BACKEND_BASE_URL is:', process.env.EXPO_PUBLIC_BACKEND_BASE_URL);
    }

    if (!isLoading) {
      console.log('[SplashPage] Fetch finished! User data:', user);
      
      if (user) {
        // User is fully authenticated, route to main dashboard/app
        console.log('[SplashPage] Routing to /explore');
        router.replace('/explore');
      } else {
        // User is not authenticated (or API failed), route to login
        console.log('[SplashPage] Routing to /onboarding');
        router.replace('/onboarding');
      }
    }
  }, [isLoading, user]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D4ED8" />

      <View style={styles.content}>
        {/* Top Branding Section */}
        <View style={styles.topSection}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons name="bottle-tonic-outline" size={32} color="#FFFFFF" />
          </View>
          <Text style={styles.appName}>Shweta Enterprise</Text>
          <Text style={styles.subtitle}>
            Milk Distribution & Retail{'\n'}Management System
          </Text>
          <Text style={styles.tagline}>
            Better Supply • Stronger Retail • Together
          </Text>
        </View>

        {/* Center / Image Section */}
        <View style={styles.imageSection}>
          <Image
            source={require('../../../assets/images/amul-bottle-nobg.png')}
            style={styles.bottleImage}
            resizeMode="contain"
          />
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <Text style={styles.footerText}>Connecting Dairies to Every Home</Text>
        </View>
      </View>
    </View>
  );
}
