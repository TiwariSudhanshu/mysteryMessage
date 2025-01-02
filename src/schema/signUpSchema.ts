import {z} from 'zod'

export const usernameValidation = z
                .string()
                .min(2, "Uername must have minimum 2 characters")
                .max(20, "Username most not have more than 20 characters")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'invalid email address'}),
    password: z.string().min(6,{message: "password must not be less than 6 characters"})
})