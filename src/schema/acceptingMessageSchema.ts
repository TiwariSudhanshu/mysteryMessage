import {z} from 'zod'

export const acceptingSchema = z.object({
    acceptMessage: z.boolean()
})