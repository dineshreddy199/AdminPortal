// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [employeeId, setEmployeeId] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [employeeDetails, setEmployeeDetails] = useState([]);
//   const navigate = useNavigate();

//   // Fetch employee data from the API when the component mounts
//   useEffect(() => {
//     // Fetch employee data from the API
//     fetch('http://localhost:5000/employees')
//       .then((response) => response.json())
//       .then((data) => setEmployeeDetails(data))
//       .catch((err) => console.error("Error fetching employee data:", err));
//   }, []);
// const handleLogin = () => {
//   // Find the user by employeeId
//   const user = employeeDetails.find((emp) => emp.employeeId === employeeId);

//   // Check if the user exists
//   if (!user) {
//     setError('Invalid Employee ID');
//     return;
//   }

//   // Check if the password matches the user's mobile number
//   if (user.mobile !== password) {
//     setError('Invalid Password');
//     return;
//   }

//   // If both conditions are true, navigate based on the role
//   if (user.mobile === password && user.employeeId === employeeId) {
//     if (user.role === 'Employee') {
//       navigate('/employee');
//     } else if (user.role === 'Super Admin') {
//       navigate('/superAdmin');
//     } else if (user.role === 'Admin') {
//       navigate('/admin');
//     } else {
//       setError('Invalid role');
//     }
//   }
// };


//   return (
//     <>
//     {/* <div style={{
//       width:"350px",
//       height:"250px",
//       backgroundColor:"yellow",
//       zIndex:"0",
//       position:"absolute",
//       top:"6.8rem",
//       left:"32rem",
//       }}></div> */}
//     <div style={
//       {
//       width:"350px",
//       height:"250px",
//       backgroundColor:"#337ff0ff",
//         position:"absolute",
//         top:"5.8rem",
//         left:"21rem", 
//         borderRadius:"2.2rem",
//         border:'solid 4px #5b98f3ff'
        
//       }}>
//     <div className="login-container" style={{
//       display:"flex",
//       marginTop:"1.2rem",
//       flexDirection:"column",
//       alignItems:"center",
//       textAlign:'center'
//     }}>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Employee ID"
//         value={employeeId}
//         style={{marginBottom:"12px",width:'200px'}}
//         onChange={(e) => setEmployeeId(e.target.value)}
//         />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         style={{marginBottom:"12px",width:"200px"}}
//         onChange={(e) => setPassword(e.target.value)}
//         />
//       <button onClick={handleLogin} style={{width:'110px'}}>Login</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <div style={{
//         display:"flex",
//         marginTop:'22px',
//         flexDirection:"row",
//         gap:"12px"
//       }}>
//         <p><b>New Employee</b></p>
//         <p><u>Forget Password ??</u></p>
//       </div>
//     </div>
//         </div>
//   </>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './component/AuthContext';

const LoginPage = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const result = await login(employeeId, password);

    if (result.success) {
      const rolePath = result.role.toLowerCase().replace(/\s/g, '');
      navigate(`/${rolePath}`);
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={{
      width: "350px",
      height: "250px",
      backgroundColor: "#337ff0ff",
      position: "absolute",
      top: "5.8rem",
      left: "21rem",
      borderRadius: "2.2rem",
      border: 'solid 4px #5b98f3ff'
    }}>
      <div className="login-container" style={{
        display: "flex",
        marginTop: "1.2rem",
        flexDirection: "column",
        alignItems: "center",
        textAlign: 'center'
      }}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          style={{ marginBottom: "12px", width: '200px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "12px", width: '200px' }}
        />
        <button onClick={handleLogin} style={{ width: '110px' }}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
