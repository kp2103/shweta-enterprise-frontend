import axios from "axios";
import { router } from 'expo-router';
import { tokenService } from "./tokenService";


export const apiClient = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_BACKEND_BASE_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

// call before the we send an request 
apiClient.interceptors.request.use(
    async (request) => {
        console.log('[ApiClient] Request Interceptor running for:', request.url);
        
        const accessToken = await tokenService.getAccessToken();
        console.log('[ApiClient] Retrieved Access Token:', accessToken ? 'Exists' : 'NULL');

        if (accessToken) {
            request.headers["Authorization"] = `Bearer ${accessToken}`;
            console.log('[ApiClient] Attached Authorization header!');
        } else {
            console.log('[ApiClient] No access token found, sending request without Authorization header.');
        }
        return request;
    },
    (error) => Promise.reject(error),
);


// after getting an response 
apiClient.interceptors.response.use(
    (response) => response, // id response succsed so return as it is 
    async (error) => {
        // here fail so hit an refersh request
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            try {
                const refreshToken = await tokenService.getRefreshToken()

                if (!refreshToken) {
                    throw new Error("No refresh token is exist")
                }

                const response = await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_BASE_URL}/api/auth/refresh`, {
                    refreshToken
                })

                if (!response.data.success)
                    throw new Error(response.data.message)

                const accessToken = response.data.accessToken;

                await tokenService.saveAccessToken(accessToken)

                // update the fail request with new access token
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
                return apiClient(originalRequest)

            } catch (refreshError) {
                await tokenService.clearTokens()

                // Redirect the user to Login imperatively using expo-router
                router.replace('/(auth)/login')

                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
)