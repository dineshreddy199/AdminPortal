import React, { useState } from 'react';
import '../Style/ApplyLeave.css';
import { Link } from 'react-router-dom';

const ApplyLeave = () => {
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
    const response = await fetch('http://localhost/employeeLeave', {
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
      <Link to="/Employee/LeavesHistory">
        <button type="button" className="btn btn-primary Back_bttn">Back</button>
      </Link>

      <div className='Nav-txt'>Add Employee Leave</div>
    <div className="leave-container">
      <h2>Apply Leave</h2>
      <form onSubmit={handleSubmit} className="leave-form">
       <div className='date'>
         <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            className='date-in'
            value={formData.startDate}
            onChange={handleChange}
            required
            />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            className='date-in'
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
       </div>
        <div className="form-group">
          <label>Reason For Leave</label>
          <textarea
            name="reason"
            placeholder="Please mention your reason here"
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

export default ApplyLeave;
