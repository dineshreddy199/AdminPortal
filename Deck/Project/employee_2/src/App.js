import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Home from './component/Home';

import SuperAdmin from './component/SuperAdmin/SuperAdmin';
import EmployeeRequest from './component/SuperAdmin/EmployeeRequest';
import Approvels from './component/SuperAdmin/Approvels';
import LeaveRequest from './component/SuperAdmin/LeaveRequest';
import ResignationRequest from './component/SuperAdmin/ResignationRequest';
import SuperAdminEmployee from './component/SuperAdmin/SuperAdminEmployee';

import Admin from './component/Admin/Admin';
import EmployeeDetails from './component/Admin/EmployeeDetails';
import AddEmployeeDetails from './component/Admin/AddEmployeeDetails';
import Leave from './component/Admin/Leave';
import EmployeeLeave from './component/Admin/EmployeeLeave';
import HrLeave from './component/Admin/HrLeave';
import RegistationDetails from './component/Admin/RegistationDetails';
import AddHrLeave from './component/Admin/AddHrLeave'
import AddRegistationDetails from './component/Admin/AddRegistationDetails'

import Employee from './component/Employee/Employee';
import LeavesHistory from './component/Employee/LeavesHistory';
import EmployeeResignation from './component/Employee/EmployeeResignation';
import ApplyResignation from './component/Employee/ApplyResignation';
import ApplyLeave from './component/Employee/ApplyLeave';
import AddLeaveRequest from './component/SuperAdmin/AddLeaveRequest';
import LoginPage from './LoginPage';
import AddEmployeeRequest from './component/SuperAdmin/AddEmployeeRequest';
import ProtectedRoute from './component/ProtectedRoute';
import ApiNavigation from './component/ApiNavigation';

function App() {
  
  return (
    <div className='bodyIndex'> 
          <ApiNavigation>
     <BrowserRouter >
      <NavBar/>
         <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path="/loginPage" element={<LoginPage  />} />

{/* Super Admin */}
            <Route path='/SuperAdmin' element={
              <ProtectedRoute allowedRoles={['Super Admin']}>
      <SuperAdmin />
    </ProtectedRoute>
  } />
            <Route path='/SuperAdminEmployee' element={
    <ProtectedRoute allowedRoles={['Super Admin']}>
      <SuperAdminEmployee />
    </ProtectedRoute>
  } />
            <Route path='/Approvels' element={
              <ProtectedRoute allowedRoles={['Super Admin']}>
      <Approvels />
    </ProtectedRoute>
  } />
            <Route path='/EmployeeRequest' element={
    <ProtectedRoute allowedRoles={['Super Admin']}>
      <EmployeeRequest />
    </ProtectedRoute>
  } />
            <Route path='/LeaveRequest' element={
    <ProtectedRoute allowedRoles={['Super Admin']}>
      <LeaveRequest />
    </ProtectedRoute>
  } />
            <Route path='/ResignationRequest' element={
              <ProtectedRoute allowedRoles={['Super Admin']}>
      <ResignationRequest />
    </ProtectedRoute>
  } />
            <Route path='/AddLeaveRequest' element={
              <ProtectedRoute allowedRoles={['Super Admin']}>
      <AddLeaveRequest />
    </ProtectedRoute>
  } />
            <Route path='/AddEmployeeRequest' element={
    <ProtectedRoute allowedRoles={['Super Admin']}>
      <AddEmployeeRequest />
    </ProtectedRoute>
  } />

{/* Admin */}
            <Route path='/Admin' element={
              <ProtectedRoute allowedRoles={['Admin']}>
      <Admin />
    </ProtectedRoute>
  } />
            <Route path='/Admin/EmployeeDetails' element={
              <ProtectedRoute allowedRoles={['Admin']}>
      <EmployeeDetails />
    </ProtectedRoute>
  } />
            <Route path='/Admin/EmployeeDetails/AddEmployeeDetails' element={
              <ProtectedRoute allowedRoles={['Admin']}>
      <AddEmployeeDetails />
    </ProtectedRoute>
  } />
            <Route path='/Admin/LeaveDetails' element={
              <ProtectedRoute allowedRoles={['Admin']}>
      <Leave />
    </ProtectedRoute>
  } />
            <Route path='/Admin/LeaveDetails/EmployeeLeave' element={
    <ProtectedRoute allowedRoles={['Admin']}>
      <EmployeeLeave />
    </ProtectedRoute>
  } />
            <Route path='/Admin/LeaveDetails/HrLeave' element={
    <ProtectedRoute allowedRoles={['Admin']}>
      <HrLeave />
    </ProtectedRoute>
  } />
            <Route path='/Admin/LeaveDetails/HrLeave/AddHrLeave' element={
    <ProtectedRoute allowedRoles={['Admin']}>
      <AddHrLeave />
    </ProtectedRoute>
  } />
            <Route path='/Admin/RegistationDetails' element={
              <ProtectedRoute allowedRoles={['Admin']}>
      <RegistationDetails />
    </ProtectedRoute>
  } />
            <Route path='/Admin/RegistationDetails/AddRegistationDetails' element={
              <ProtectedRoute allowedRoles={['Admin']}>
      <AddRegistationDetails />
    </ProtectedRoute>
  } />

{/* Employee */}
            <Route path='/Employee' element={
    <ProtectedRoute allowedRoles={['Employee']}>
      <Employee />
    </ProtectedRoute>
  } />
            <Route path='/Employee/LeavesHistory' element={
    <ProtectedRoute allowedRoles={['Employee']}>
      <LeavesHistory />
    </ProtectedRoute>
  } />
            <Route path='/Employee/LeavesHistory/ApplyLeave' element={
    <ProtectedRoute allowedRoles={['Employee']}>
      <ApplyLeave />
    </ProtectedRoute>
  } />
            <Route path='/Employee/EmployeeResignation' element={
              <ProtectedRoute allowedRoles={['Employee']}>
      <EmployeeResignation />
    </ProtectedRoute>
  } />
            <Route path='/Employee/EmployeeResignation/ApplyResignation' element={
              <ProtectedRoute allowedRoles={['Employee']}>
      <ApplyResignation />
    </ProtectedRoute>
  } />
          </Routes>
      </BrowserRouter>
  </ApiNavigation>
      
     
  
     </div>
    );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import EmployeePage from './Demos/EmployeePage';
// import SuperAdminPage from './Demos/SuperAdminPage';
// import AdminPage from './Demos/AdminPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
        // <Route path="/" element={<LoginPage />} />
//         <Route path="/employee" element={<EmployeePage />} />
//         <Route path="/superAdmin" element={<SuperAdminPage />} />
//         <Route path="/admin" element={<AdminPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
