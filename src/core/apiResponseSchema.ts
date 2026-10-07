import { z, ZodTypeAny } from 'zod'
export function apiResponseSchema<T extends ZodTypeAny>(dataSchema: T) {
    return z.object({
        success: z.boolean(),
        message: z.string(),
        data: dataSchema,
    })
}