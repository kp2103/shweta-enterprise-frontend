import { apiResponseSchema } from '@/core/apiResponseSchema'
import { z } from 'zod'

export const meApiDataSchema = z.object({
    fullName: z.string(),
    email: z.email(),
    avatarURL: z.url().optional(),
    createdAt: z.date()
})


export const meApiResponseSchema = apiResponseSchema(meApiDataSchema)

export type MeApiData = z.infer<typeof meApiDataSchema>
export type MeApiResponse = z.infer<typeof meApiResponseSchema>