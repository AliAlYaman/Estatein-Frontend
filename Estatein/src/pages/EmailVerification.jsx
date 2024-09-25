import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EmailVerification() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verificationUrl = searchParams.get('verification_url');

    if (!verificationUrl) {
      setError('Invalid verification link.');
      return;
    }

    const verifyEmail = async () => {
      setIsVerifying(true);
      try {
        console.log(verificationUrl)
        const response = await axios.get(verificationUrl);

        if (response.data.success) {
          setIsVerified(true);
          setTimeout(() => {
            navigate('/'); // Redirect to home or another page after verification
          }, 2000);
        } else {
          setError('Verification failed.');
        }
      } catch (err) {
        setError('Verification failed. Please try again.');
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Email Verification</h2>

        {isVerified ? (
          <div className="text-center">
            <p className="text-green-600 font-semibold">Email Verified Successfully!</p>
            <p className="text-gray-500">You will be redirected shortly.</p>
          </div>
        ) : (
          <>
            <p className="text-gray-500 text-center mb-6">
              Verifying your email address...
            </p>

            {error && <p className="text-red-500 text-center">{error}</p>}

            {isVerifying && <p className="text-center text-blue-500">Verifying...</p>}
          </>
        )}
      </div>
    </div>
  );
}