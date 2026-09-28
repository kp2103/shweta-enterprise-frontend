import axios from "axios";
import { tokenService } from "./tokenService";
import {useNavigation} from 'expo-router'
import { CommonActions } from "expo-router/build/react-navigation";


export const apiClient = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
    },
});

// call before the we send an request 
apiClient.interceptors.request.use(
  async (request) => {
    const accessToken = await tokenService.getAccessToken();

    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error),
);


// after getting an response 
apiClient.interceptors.response.use(
    (response)=> response, // id response succsed so return as it is 
    async (error)=>{
        // here fail so hit an refersh request
        const originalRequest = error.config;

        if(error.response?.status === 401 && !originalRequest._retry)
        {
            originalRequest._retry = true
            try {
                const refreshToken = tokenService.getRefreshToken()
    
                if(!refreshToken)
                {
                    throw new Error("No refresh token is exist")
                }
    
                const response = await axios.post(`\auth\refresh`,{
                    refreshToken
                })
    
                if(!response.data.success)
                    throw new Error(response.data.message)

                const accessToken = response.data.accessToken;

                await tokenService.saveAccessToken(accessToken)
    
                // update the fail request with new access token
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
                return apiClient(originalRequest)
    
            } catch (refreshError) {
                const navigation = useNavigation()

                await tokenService.clearTokens()

                // TODO redirect the user to Login 
                navigation.dispatch(
                    CommonActions.reset({
                        index : 0,
                        routes : [{name : '(auth)/login'}]
                    })
                )

                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
)