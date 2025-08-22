import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './component/AuthContext';

const LoginPage = () => {
  const [mobile, setMobile] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setOtpSent(true);
    alert(`Your OTP is: ${otp}`); // For testing purpose
  };

  const handleSubmit = async () => {
    if (enteredOtp !== generatedOtp) {
      setError('Invalid OTP');
      return;
    }

    const result = await login(enteredOtp, mobile); // Using OTP as employeeId just to keep old logic
    if (result.success) {
      const rolePath = result.role.toLowerCase().replace(/\s/g, '');
      navigate(`/${rolePath}`);
    } else {
      setError(result.message);
    }
  };

  const styles = {
    main: {
      width: "500px",
      height: "400px",
      background: "#4A4949BF",
      position: "relative",
      top: "170px",
      left: "500px",
      color: "white",
      borderRadius: "20px",
      padding: "20px",
    },
    input: {
      margin: "5px 0 20px 0",
      padding: "10px",
      width: "50%",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },
    button: {
      margin: "10px",
      padding: "10px 20px",
      borderRadius: "8px",
      background: "#4A4949BF",
      borderColor: "black",
      color: "white",
      cursor: "pointer",
      border: "1px solid #ccc",
    },
  };

  // const outputValue=`Your OTP is: ${generatedOtp}`;
  // const outputValue=generatedOtp;

  return (
    <div style={styles.main}>
      <h4>Login via OTP</h4>
      <label>Mobile Number:</label><br />
      <input
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={styles.input}
      />
      <br />
      <button onClick={generateOTP} style={styles.button}>Generate OTP</button>
{/* 
      <p>Your OTP is: {generatedOtp}</p> 
 */}
      {otpSent && (
        <>
          <label>Enter OTP:{generatedOtp}</label><br />
          <input
            placeholder="Enter Your OTP"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
            style={styles.input}
          />
          <br />
          <button onClick={handleSubmit} style={styles.button}>Submit</button>
        </>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
