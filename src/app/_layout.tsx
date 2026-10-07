import { QueryClient, QueryClientProvider, onlineManager } from '@tanstack/react-query';
import * as Network from 'expo-network';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';

// 1. Configure the network listener for TanStack Query
onlineManager.setEventListener((setOnline) => {
  let initialised = false;

  // Listen for changes in network state
  const eventSubscription = Network.addNetworkStateListener((state) => {
    initialised = true;
    setOnline(!!state.isConnected);
  });

  // Check the initial network state immediately
  Network.getNetworkStateAsync()
    .then((state) => {
      if (!initialised) {
        setOnline(!!state.isConnected);
      }
    })
    .catch(() => {
      // getNetworkStateAsync can reject on some platforms/SDK versions
    });

  // Cleanup function
  return eventSubscription.remove;
});

// 2. Create the Query Client instance
const queryClient = new QueryClient();

export default function RootLayout() {
  useEffect(() => {
    // Hide the native splash as soon as JS is ready
    SplashScreen.hideAsync().catch(() => { });
  }, []);

  return (
    // 3. Wrap your entire app (the Fragment) in the Provider
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </QueryClientProvider>
  );
}