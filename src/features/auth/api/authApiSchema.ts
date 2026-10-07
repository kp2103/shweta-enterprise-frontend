import { apiResponseSchema } from '@/core/apiResponseSchema'
import { z } from 'zod'

// Login schema and data schema
const loginApiDataSchema = z.object({
    fullName: z.string(),
    email: z.string(),
    avatarURL: z.string().nullish(),
    createdAt: z.date(),
    accessToken: z.string(),
    refreshToken: z.string()
})

export const loginApiRequestSchema = z.object({
    email: z.email(),
    password: z.string(),
})

export const loginApiResponseSchema = apiResponseSchema(loginApiDataSchema)

export type LoginApiRequestSchema = z.infer<typeof loginApiRequestSchema>
export type LoginApiDataSchema = z.infer<typeof loginApiDataSchema>
export type LoginApiResponseSchema = z.infer<typeof loginApiResponseSchema>

// register
const registerDataSchema = z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    id: z.string(),
    email: z.email(),
    fullName: z.string(),
    createdAt: z.date()
})

export const registerRequestSchema = z.object({
    fullName: z.string(),
    email: z.email(),
    password: z.string(),
    avatarURL: z.string().nullish(),
    roleId: z.enum(["Retail", "Distributor"])
})

export const registerApiResponseSchema = apiResponseSchema(registerDataSchema)

export type RegisterRequestSchema = z.infer<typeof registerRequestSchema>
export type RegisterApiDataSchema = z.infer<typeof registerDataSchema>
export type RegisterApiResponseSchema = z.infer<typeof registerApiResponseSchema>

// me
const meDataSchema = z.object({
    id: z.string(),
    email: z.string(),
    fullName: z.string(),
    avatarURL: z.string().nullish(),
}).passthrough();

export const meApiResponseSchema = apiResponseSchema(meDataSchema);
export type MeApiDataSchema = z.infer<typeof meDataSchema>;
export type MeApiResponseSchema = z.infer<typeof meApiResponseSchema>;