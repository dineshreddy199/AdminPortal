const express = require('express');
const { employeeResignation } = require('../models/employeeResignatationModel');
const router = express.Router();

// Create EmployeeResignation
router.post('/', async (req, res) => {
  try {
    const EmployeeResignation = new employeeResignation(req.body);
    await EmployeeResignation.save();
    res.status(201).json(EmployeeResignation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All EmployeeResignations
router.get('/', async (req, res) => {
  try {
    const EmployeeResignations = await employeeResignation.find();
    res.json(EmployeeResignations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update EmployeeResignation
router.put('/:_id', async (req, res) => {
  try {
    const { status } = req.body;

    if (status !== 'Approved' && status !== 'Rejected') {
      return res.status(400).json({ message: "Invalid status. Status must be 'Approved' or 'Rejected'." });
    }

    const updatedEmployeeResignation = await employeeResignation.findByIdAndUpdate(
      req.params._id,
      { status },  // Update the leave request status
      { new: true }  // Return the updated leave request document
    );

    if (!updatedEmployeeResignation) {
      return res.status(404).json({ message: "Leave request not found." });
    }

    res.json(updatedEmployeeResignation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// router.put('/:_id', async (req, res) => {
//   try {
//     const EmployeeResignation = await employeeResignation.findByIdAndUpdate(req.params._id, req.body, { new: true });
//     res.json(EmployeeResignation);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Delete EmployeeResignation
router.delete('/:_id', async (req, res) => {
  try {
    await employeeResignation.findByIdAndDelete(req.params._id);
    res.json({ message: 'EmployeeResignation deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
