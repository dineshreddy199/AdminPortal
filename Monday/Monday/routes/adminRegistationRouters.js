// const express = require('express');
// const router = express.Router();
// const { adminRegistation } = require('../models/adminRegistationModel');

// // Create AdminRegistation
// router.post('/', async (req, res) => {
//   try {
//     const AdminRegistation = new adminRegistation(req.body);
//     await AdminRegistation.save();
//     res.status(201).json(AdminRegistation);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get All AdminRegistations
// router.get('/', async (req, res) => {
//   try {
//     const AdminRegistations = await adminRegistation.find();
//     res.json(AdminRegistations);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Update AdminRegistation
// router.put('/:_id', async (req, res) => {
//   try {
//     const AdminRegistation = await adminRegistation.findByIdAndUpdate(req.params._id, req.body, { new: true });
//     res.json(AdminRegistation);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete AdminRegistation
// router.delete('/:_id', async (req, res) => {
//   try {
//     await adminRegistation.findByIdAndDelete(req.params._id);
//     res.json({ message: 'AdminRegistation deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { adminRegistation } = require('../models/adminRegistationModel');

// Create Leave Request
router.post('/', async (req, res) => {
  try {
    const { employeeId, startDate, endDate, leaveType, reason, status } = req.body;

    const newAdminRegistation = new adminRegistation({
      employeeId,
      startDate,
      endDate,
      leaveType,
      reason,
      status: status || 'Pending'  // Default status as 'Pending'
    });

    await newAdminRegistation.save();
    res.status(201).json(newAdminRegistation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Leave Requests
router.get('/', async (req, res) => {
  try {
    const adminRegistations = await adminRegistation.find();
    res.json(adminRegistations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Leave Requests by Employee ID
router.get('/employee/:employeeId', async (req, res) => {
  try {
    const adminRegistations = await adminRegistation.find({ employeeId: req.params.employeeId });
    if (adminRegistations.length === 0) {
      return res.status(404).json({ message: "No leave requests found for this employee." });
    }
    res.json(adminRegistations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Leave Request (For Approval/Rejection)
router.put('/:_id', async (req, res) => {
  try {
    const { status } = req.body;

    if (status !== 'Approved' && status !== 'Rejected') {
      return res.status(400).json({ message: "Invalid status. Status must be 'Approved' or 'Rejected'." });
    }

    const updatedAdminRegistation = await adminRegistation.findByIdAndUpdate(
      req.params._id,
      { status },  // Update the leave request status
      { new: true }  // Return the updated leave request document
    );

    if (!updatedAdminRegistation) {
      return res.status(404).json({ message: "Leave request not found." });
    }

    res.json(updatedAdminRegistation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Leave Request
router.delete('/:_id', async (req, res) => {
  try {
    const deletedAdminRegistation = await adminRegistation.findByIdAndDelete(req.params._id);
    if (!deletedAdminRegistation) {
      return res.status(404).json({ message: "Leave request not found." });
    }
    res.json({ message: 'Leave request deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
