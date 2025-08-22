const express = require('express');
const { employeeLeave } = require('../models/emploeeLeaveModel');
const { default: employeeModel } = require('../models/employeeModel');
const router = express.Router();

// Create EmployeeLeave
router.post('/', async (req, res) => {
  try {
    const EmployeeLeave = new employeeLeave(req.body);
    await EmployeeLeave.save();
    res.status(201).json(EmployeeLeave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All EmployeeLeaves
router.get('/', async (req, res) => {
  try {
    const EmployeeLeaves = await employeeLeave.find();
    res.json(EmployeeLeaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update EmployeeLeave
router.put('/:_id', async (req, res) => {
  try {
    const EmployeeLeave = await employeeLeave.findByIdAndUpdate(req.params._id, req.body, { new: true });
    res.json(EmployeeLeave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete EmployeeLeave
router.delete('/:_id', async (req, res) => {
  try {
    await employeeLeave.findByIdAndDelete(req.params._id);
    res.json({ message: 'EmployeeLeave deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
