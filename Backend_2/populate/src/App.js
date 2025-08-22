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

function App() {
  
  return (
    <div className='bodyIndex'> 
     <BrowserRouter >
      <NavBar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            
            <Route path='/SuperAdmin' element={<SuperAdmin/>}/>
            <Route path='/SuperAdminEmployee' element={<SuperAdminEmployee/>} />
            <Route path='/Approvels' element={<Approvels/>}/>
            <Route path='/EmployeeRequest' element={<EmployeeRequest/>}/>
            <Route path='/LeaveRequest' element={<LeaveRequest/>}/>
            <Route path='/ResignationRequest' element={<ResignationRequest/>}/>
            <Route path='/AddLeaveRequest' element={<AddLeaveRequest/>}/>

            <Route path='/Admin' element={<Admin/>}/>
            <Route path='/EmployeeDetails' element={<EmployeeDetails/>}/>
            <Route path='/AddEmployeeDetails' element={<AddEmployeeDetails/>}/>
            <Route path='/LeaveDetails' element={<Leave/>}/>
            <Route path='/EmployeeLeave' element={<EmployeeLeave/>}/>
            <Route path='/HrLeave' element={<HrLeave/>}/>
            <Route path='AddHrLeave' element={<AddHrLeave/>}/>
            <Route path='/RegistationDetails' element={<RegistationDetails/>}/>
            <Route path='/AddRegistationDetails' element={<AddRegistationDetails/>}/>

            <Route path='/Employee' element={<Employee/>}/>
            <Route path='/LeavesHistory' element={<LeavesHistory/>}/>
            <Route path='/ApplyLeave' element={<ApplyLeave/>}/>
            <Route path='/EmployeeResignation' element={<EmployeeResignation/>}/>
            <Route path='/ApplyResignation' element={<ApplyResignation/>}/>
          </Routes>
      </BrowserRouter>
      
     
  
     </div>
    );
}

export default App;
