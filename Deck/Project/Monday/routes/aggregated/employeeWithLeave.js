const express = require('express');
const router = express.Router();
const Employee = require('../../models/employeeModel').default;

// Using CommonJS for consistency with rest of your code
const { employeeleave } = require('../../models/emploeeLeaveModel');

// GET /employeeWithLeave
router.get('/', async (req, res) => {
  try {
    const data = await Employee.aggregate([
      {
        $lookup: {
          from: '/employeeLeave',  // ✅ Must match actual collection name in MongoDB
          localField: 'employeeId',
          foreignField: 'employeeId',
          as: 'leaveDetails'
        }
      }
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
