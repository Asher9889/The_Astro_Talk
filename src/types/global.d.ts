declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

export {};  // ensures this file is treated as a module for ts