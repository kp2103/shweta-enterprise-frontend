import { apiClient } from '@/api/apiClient';
import { MeApiResponse, meApiResponseSchema } from './splashScreenApiSchema';

export const splashScreenApiService = {

    async getMe(): Promise<MeApiResponse> {
        const response = await apiClient.get('/auth/me');
        return meApiResponseSchema.parse(response.data);
    }
};
