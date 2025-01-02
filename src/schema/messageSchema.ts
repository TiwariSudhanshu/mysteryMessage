import {z} from 'zod'

export const messageSchema = z.object({
    content: z
    .string()
    .min(10,"Message must not be less than 10 characters")
    .max(100,"Message must not have more than 100 characters")
})