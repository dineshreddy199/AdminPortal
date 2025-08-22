import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Style/AddEmployee.css';

const AddEmployeeDetails = () => {
const API_URL="http://localhost:5000/employees";

  const [formData, setFormData] = useState({
    employeeId: '',
    name: '',
    email: '',
    role: '',
    designation: '',
    mobile: ''
  });

  const { id } = useParams();  // To grab the ID from the URL (for editing)
  const navigate = useNavigate();

  // Fetch employee details for editing
  useEffect(() => {
    if (id) {
      const fetchEmployee = async () => {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        setFormData(data);  // Populate form with existing data for editing
      };
      fetchEmployee();
    }
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = id ? 'PUT' : 'POST';  // Determine method based on whether it's a new or existing employee
    const url = id ? `${API_URL}/${id}` : '/api/employees';

    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      navigate('/EmployeeDetails');  // Redirect back to the employee list
    } else {
      console.error('Failed to submit');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="row">
            <label>Employee ID</label>
            <input
              type="text"
              value={formData.employeeId}
              onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
              required
            />
          </div>
          <div className="row">
            <label>Employee Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="row">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="row">
            <label>Role</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              required
            />
          </div>
          <div className="row">
            <label>Designation</label>
            <input
              type="text"
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              required
            />
          </div>
          <div className="row">
            <label>Mobile Number</label>
            <input
              type="text"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              required
            />
          </div>
          <button type="submit">
            {id ? 'Update Employee' : 'Add Employee'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeDetails;
