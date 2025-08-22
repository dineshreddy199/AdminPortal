import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [user, setUser] = useState(null);
  
  // Fetch employee data from API
  useEffect(() => {
    fetch('http://localhost:5000/employees')
      .then(res => res.json())
      .then(data => setEmployeeDetails(data))
      .catch(err => console.error("Failed to fetch employee data:", err));
  }, []);

  const login = (employeeId, password) => {
    const foundUser = employeeDetails.find(emp => emp.employeeId === employeeId && emp.mobile === password);
    if (foundUser) {
      setUser(foundUser);
      return { success: true, role: foundUser.role };
    } else {
      return { success: false, message: "Invalid credentials" };
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
