import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { tokenService } from '@/api/tokenService';
import { authApiService } from '../api/authApiService';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/useAuthStore';

// Prevent the splash screen from auto-hiding before auth check is complete.
SplashScreen.preventAutoHideAsync().catch(() => { });

export function useSplashCheck() {
  const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);
  const setUser = useAuthStore(state => state.setUser);

  useEffect(() => {
    async function prepare() {
      try {
        const accessToken = await tokenService.getAccessToken();
        const refreshToken = await tokenService.getRefreshToken();

        if (accessToken && refreshToken) {
          const response = await authApiService.me();
          if (response.data) {
             setUser(response.data);
             router.replace('/explore');
          }
        }
      } catch (e) {
        console.warn('Auth check failed:', e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync().catch(() => {});
      }
    }

    prepare();
  }, [router, setUser]);

  return { appIsReady };
}
