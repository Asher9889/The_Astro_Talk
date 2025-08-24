import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const useLoginWithPhone = (auth: any) => {
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Setup Recaptcha once
  const setUpRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal", // or "normal" if you want a visible captcha
          callback: (response: any) => {
            console.log("reCAPTCHA solved:", response);
          },
        }
      );
    }
    return window.recaptchaVerifier;
  };

  // Send OTP
  const sendOtp = async (phone: string) => {
    setLoading(true);
    setError(null);
    try {
      const appVerifier = setUpRecaptcha();
      const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(confirmation);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const verifyOtp = async (otp: string) => {
    if (!confirmationResult) return;
    setLoading(true);
    setError(null);
    try {
      const result = await confirmationResult.confirm(otp);
      setUser(result.user);
      return result.user;
    } catch (err: any) {
      console.error(err);
      setError("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return { sendOtp, verifyOtp, loading, error, user };
};


export default useLoginWithPhone;