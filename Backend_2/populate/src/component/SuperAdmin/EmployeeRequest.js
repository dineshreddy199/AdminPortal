import React, { useState, useEffect } from 'react';
import '../../component/Style/EmployeeDetails.css';
import { Link, useNavigate } from 'react-router-dom';

const EmployeeRequest = () => {
  const API_BASE_URL = 'http://localhost:5000/adminRegistation';

  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pendingStatus, setPendingStatus] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const rowsPerPage = 10;

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();
      setContacts(data);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (_id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await fetch(`${API_BASE_URL}/${_id}`, { method: 'DELETE' });
      setContacts(contacts.filter(contact => contact._id !== _id));
    }
  };

  const handleEdit = (employee) => {
    navigate('/AddEmployeeRequest', { state: { employee } });
  };

  const askForConfirmation = (_id, status) => {
    setPendingStatus({ _id, status });
    setShowConfirm(true);
  };

  const confirmStatusChange = async () => {
    const { _id, status } = pendingStatus;
    try {
      const response = await fetch(`${API_BASE_URL}/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        const updatedEmployee = await response.json();
        setContacts(prev =>
          prev.map(emp => (emp._id === _id ? updatedEmployee : emp))
        );
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setShowConfirm(false);
      setPendingStatus(null);
    }
  };

  const cancelConfirmation = () => {
    setShowConfirm(false);
    setPendingStatus(null);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.employeeId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredContacts.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentContacts = filteredContacts.slice(startIndex, startIndex + rowsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, contacts]);

  return (
    <>
      <Link to="/Approvels">
        <button type="button" className="btn btn-primary Back_bttn">Back</button>
      </Link>

      <div className='Nav-txt'>List Of Employee Details</div>

      <div className='Main-Box'>
        <div className='SearchBar'>
          <input
            type="text"
            placeholder="Search by ID, Name, Email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className='TableHeader'>
          <div className='TableHeader-In' id='EmployeeRequest_TableHeader-In'>
            <span>Sl.No</span>
            <span>Employee ID</span>
            <span>Employee Name</span>
            <span>Employee Email</span>
            <span>Employee Mobile</span>
            <span>Employee Designation</span>
            <span>Status</span>
            <span>Action</span>
          </div>
        </div>

        <div className='TableBody'>
          {currentContacts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '1rem', color: 'grey' }}>No Employees Found</div>
          ) : (
            currentContacts.map((contact, index) => (
              <div className='TableBody-In' id='EmployeeReq' key={contact._id}>
                <span style={{ marginLeft: "-2.2rem" }}>{startIndex + index + 1}</span>
                <span>{contact.employeeId}</span>
                <span>{contact.name}</span>
                <span>{contact.email}</span>
                <span>{contact.mobile}</span>
                <span>{contact.designation}</span>
                <span>
                  {contact.status === 'Approved' || contact.status === 'Rejected' ? (
                    <span style={{ color: contact.status === 'Approved' ? 'green' : 'red', fontWeight: 'bold' }}>
                      {contact.status}
                    </span>
                  ) : (
                    <>
                      <button onClick={() => askForConfirmation(contact._id, 'Rejected')} style={{ marginRight: '0.5rem' }}>
                        Reject
                      </button>
                      <button onClick={() => askForConfirmation(contact._id, 'Approved')}>
                        Approve
                      </button>
                    </>
                  )}
                </span>
                <span>
                  {contact.status !== 'Approved' && contact.status !== 'Rejected' && (
                    <>
                      <button onClick={() => handleEdit(contact)} title="Edit">✏️</button>
                    </>
                  )}
                  <button onClick={() => handleDelete(contact._id)} title="Delete">🗑️</button>
                </span>
              </div>
            ))
          )}
        </div>

        <div className='TableFooter'>
          <div className='TableFooter-In' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              &lt;
            </button>
            <p>{startIndex + 1} of {filteredContacts.length}</p>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
              &gt;
            </button>
          </div>
        </div>
      </div>

      {showConfirm && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <p>Are you sure you want to <strong>{pendingStatus.status}</strong> this request?</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button onClick={confirmStatusChange} className="btn btn-success">Yes, Confirm</button>
              <button onClick={cancelConfirmation} className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeRequest;
