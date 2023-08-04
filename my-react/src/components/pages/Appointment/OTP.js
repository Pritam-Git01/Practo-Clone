// App.js
import React, { useState } from 'react';
import { auth, RecaptchaVerifier } from '../../Firebase.config';

const OTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  const handleSendOTP = async () => {
    try {
      const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container');
      const confirmationResult = await auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
      setVerificationId(confirmationResult.verificationId);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
      await auth.signInWithCredential(credential);
      setIsOTPVerified(true); // Set the state to indicate OTP is verified
      console.log('OTP verification successful');
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <h1>OTP Authentication with Firebase</h1>
      <div>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleSendOTP}>Send OTP</button>
      </div>
      {verificationId && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
      )}
      {isOTPVerified && <p>OTP verification successful!</p>}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default OTP;
