import React, { useState, useEffect } from "react";
import { Loader2, CheckCircle, Mail } from "lucide-react";

export default function EmailVerification() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => {
      setIsVerified(true);
    }, 2000);
  };

  useEffect(() => {
    if (isVerified) {
      // Simulate redirect to home page
      setTimeout(() => {
        alert("Redirecting to home page...");
        // In a real application, you would use routing here
        // router.push('/home')
      }, 1500);
    }
  }, [isVerified]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <div className="w-full max-w-md mx-4 overflow-hidden shadow-2xl bg-white rounded-lg">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-[#703BF7] p-3">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-[#1A1A1A] mb-2">
            Email Verification
          </h2>
          <p className="text-center text-[#1A1A1A] opacity-70 mb-6">
            Please verify your email address to activate your account
          </p>
          {!isVerified ? (
            <button
              className="w-full bg-[#703BF7] hover:bg-[#5c2fd6] text-white py-2 px-4 rounded-md transition-colors duration-300"
              onClick={handleVerification}
              disabled={isVerifying}
            >
              {isVerifying ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin inline" />
                  Verifying...
                </>
              ) : (
                "Verify Email"
              )}
            </button>
          ) : (
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-semibold text-[#703BF7] mb-2">
                Email Verified Successfully!
              </p>
              <p className="text-sm text-[#1A1A1A] opacity-70">
                You will be redirected to the home page shortly.
              </p>
            </div>
          )}
        </div>
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-center text-[#1A1A1A] opacity-50">
            If you didn't request this verification, please ignore this message.
          </p>
        </div>
      </div>
    </div>
  );
}
