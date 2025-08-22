import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/employees')
      .then(res => res.json())
      .then(data => setEmployeeDetails(data))
      .catch(err => console.error("Failed to fetch employee data:", err));
  }, []);

  const login = (otp, mobile) => {
    // You can implement a proper OTP matching here; now just dummy match with mobile
    const foundUser = employeeDetails.find(emp => emp.mobile === mobile);
    if (foundUser) {
      setUser(foundUser);
      return { success: true, role: foundUser.role };
    } else {
      return { success: false, message: "Invalid mobile number" };
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
