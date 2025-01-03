import { resend } from "@/lib/resend";
import VerificationEmail from "../../Emails/verificationEmails";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystery Message || Verification code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return{success:true, message: 'Email Send successfully'}

    } catch (emailError) {
        console.error("Error in sending verification email", emailError)
        return{success:false, message: 'Failed to send verification email'}
    }
}
