import { apiClient } from "@/api/apiClient";
import { loginApiRequestSchema, type LoginApiRequestSchema, type LoginApiResponseSchema, loginApiResponseSchema, registerApiResponseSchema, RegisterApiResponseSchema, registerRequestSchema, meApiResponseSchema, type MeApiResponseSchema } from "./authApiSchema";

export const authApiService = {

    async login(user: LoginApiRequestSchema): Promise<LoginApiResponseSchema> {

        const validatedUser = loginApiRequestSchema.parse(user)

        const response = await apiClient.post('/auth/login', validatedUser)
        return loginApiResponseSchema.parse(response.data)
    },

    async register(user: RegisterApiResponseSchema): Promise<RegisterApiResponseSchema> {
        const validatedUser = registerRequestSchema.parse(user)

        const response = await apiClient.post('/auth/register', validatedUser)
        return registerApiResponseSchema.parse(response.data)
    },

    async me(): Promise<MeApiResponseSchema> {
        const response = await apiClient.get('/auth/me')
        return meApiResponseSchema.parse(response.data)
    }

}