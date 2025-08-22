import React, { useState } from 'react';
import '../Style/ApplyLeave.css';
import { Link } from 'react-router-dom';

const AddRegistationDetails = () => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can customize this endpoint
    const response = await fetch('http://localhost/employeeRegistation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        type: 'employeeLeave' // or 'hr', depending on who applies
      })
    });

    const data = await response.json();
    console.log('Leave submitted:', data);
    alert('Leave submitted successfully!');
  };

  const handleCancel = () => {
    setFormData({ startDate: '', endDate: '', reason: '' });
  };

  return (
    <>
      <Link to="/Admin/RegistationDetails">
        <button type="button" className="btn btn-primary Back_bttn">Back</button>
      </Link>

      <div className='Nav-txt'>Add Employee Registation</div>
    <div className="leave-container">
      <h2>Apply Resignation</h2>
      <form onSubmit={handleSubmit} className="leave-form">
        <div className="form-group" >
          <label>Reason For Resignation</label>
          <textarea
            name="reason"
            placeholder="Please mention your reason here"
            style={{height:'200px'}}
            value={formData.reason}
            onChange={handleChange}
            />
        </div>
        <div className="button-group">
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  </>
  );
};

export default AddRegistationDetails;
