import { useMutation } from "@tanstack/react-query"
import { useRouter } from "expo-router"
import { tokenService } from "@/api/tokenService"
import { Alert } from "react-native"
import { authApiService } from "../api/authApiService"
import { useAuthStore } from "@/store/useAuthStore"

interface UseLoginProps {
    onError?: (error: Error) => void;
}

export function useLogin({ onError }: UseLoginProps = {}) {
    const router = useRouter()
    const setUser = useAuthStore(state => state.setUser);

    return useMutation({
        mutationFn: async (user: Parameters<typeof authApiService.login>[0]) =>
            await authApiService.login(user),
        onSuccess: async (response) => {
            const { accessToken, refreshToken } = response.data;

            // Store tokens
            if (accessToken) {
                await tokenService.saveAccessToken(accessToken);
            }
            if (refreshToken) {
                await tokenService.saveRefreshToken(refreshToken);
            }

            try {
                const meResponse = await authApiService.me();
                if (meResponse.data) {
                    setUser(meResponse.data);
                }
            } catch (err) {
                console.warn("Failed to fetch user profile", err);
            }

            Alert.alert("Login Successful", response.message || "Welcome back!");

            router.replace('/explore'); // Default to main tabs, adjust as needed
        },
        onError: (error) => {
            Alert.alert("Login Failed", error.message || "An error occurred during login.");
            if (onError) {
                onError(error);
            }
        }
    })
}