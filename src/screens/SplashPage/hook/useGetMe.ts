import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { MeApiResponse } from '../api/splashScreenApiSchema';
import { splashScreenApiService } from '../api/splashScreenApiService';

// Export the query key so it can be used for cache invalidation elsewhere
export const GET_ME_QUERY_KEY = ['me'] as const;

/**
 * Hook to fetch the current logged-in user's profile.
 * Follows React Query best practices by returning the full query object
 * and avoiding try/catch around the hook itself.
 */
export function useGetMe(options?: Omit<UseQueryOptions<MeApiResponse, Error>, 'queryKey' | 'queryFn'>) {
    const query = useQuery<MeApiResponse, Error>({
        queryKey: GET_ME_QUERY_KEY,
        queryFn: () => splashScreenApiService.getMe(),
        // For authentication checks, we usually don't want to retry on failure (e.g., 401)
        retry: false,
        // Keep data fresh for 5 minutes to prevent excessive refetching on background/foreground
        staleTime: 1000 * 60 * 5,
        ...options,
    });

    return {
        ...query,
        // Provide a convenient accessor for the actual user data payload
        user: query.data?.data ?? null,
    };
}