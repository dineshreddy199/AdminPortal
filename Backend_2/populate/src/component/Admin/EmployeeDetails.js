import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../component/Style/EmployeeDetails.css';

// Assume there's an API call to get employee data
const EmployeeDetails = () => {
const API_URL="http://localhost:5000/employees";

  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  
  // Fetch employees on load
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('${API_URL}');
      const data = await response.json();
      setEmployees(data);
      setFilteredEmployees(data);  // initially set filtered list as all employees
    };
    fetchEmployees();
  }, []);

  // Handle delete employee
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    setEmployees(employees.filter(emp => emp._id !== id));  // Update the UI after deletion
  };

  // Filter employees by search term
  useEffect(() => {
    const results = employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(results);
  }, [searchTerm, employees]);

  return (
    <>
      <div>
        <Link to="/AddEmployeeDetails">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              position: "absolute",
              top: "1.2rem",
              left: "98rem",
              backgroundColor: "red",
              width: "8rem",
              height: "2.8rem"
            }}
          >
            Add+
          </button>
        </Link>
      </div>

      <div className="Nav-txt">List Of Employee Details</div>

      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search by ID, Name, Email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="TableHeader">
        <div className="TableHeader-In">
          <span>Sl.No</span>
          <span>Employee ID</span>
          <span>Employee Name</span>
          <span>Employee Email</span>
          <span>Employee Mobile</span>
          <span>Employee Designation</span>
          <span>Action</span>
        </div>
      </div>

      <div className="TableBody">
        {filteredEmployees.map((employee, index) => (
          <div key={employee._id} className="TableBody-In">
            <span>{index + 1}</span>
            <span>{employee.employeeId}</span>
            <span>{employee.name}</span>
            <span>{employee.email}</span>
            <span>{employee.mobile}</span>
            <span>{employee.designation}</span>
            <span>
              <Link to={`/AddEmployeeDetails/${employee._id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(employee._id)}>Delete</button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmployeeDetails;
