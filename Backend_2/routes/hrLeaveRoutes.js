const express = require('express');
const router = express.Router();
const { hrLeave } = require('../models/hrLeaveModel');

// Create HrLeave
router.post('/', async (req, res) => {
  try {
    const HrLeave = new hrLeave(req.body);
    await HrLeave.save();
    res.status(201).json(HrLeave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All HrLeaves
router.get('/', async (req, res) => {
  try {
    const HrLeaves = await hrLeave.find();
    res.json(HrLeaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update HrLeave
router.put('/:_id', async (req, res) => {
  try {
    const HrLeave = await hrLeave.findByIdAndUpdate(req.params._id, req.body, { new: true });
    res.json(HrLeave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete HrLeave
router.delete('/:_id', async (req, res) => {
  try {
    await hrLeave.findByIdAndDelete(req.params._id);
    res.json({ message: 'HrLeave deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
