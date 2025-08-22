// const mongoose = require('mongoose');
// const { Schema, model } = mongoose;

// const adminRegistationSchema = new Schema({
//   employeeId: { type: String, required: true, unique: true },
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   role: { type: String, required: true },
//   designation: { type: String, required: true },
//   mobile: { type: String, required: true, unique: true }
// }, { timestamps: true });

// const adminRegistation = model('AdminRegistation', adminRegistationSchema);
// module.exports = { adminRegistation };

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Leave Request Schema
const adminRegistationSchema = new Schema({
  employeeId: { type: String, required: true },  // Employee ID who requested the leave
  startDate: { type: Date, required: true },    // Start date of the leave
  endDate: { type: Date, required: true },      // End date of the leave
  leaveType: { type: String, required: true },  // Type of leave (sick, vacation, etc.)
  reason: { type: String, required: true },     // Reason for leave
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }  // Status of the leave
}, { timestamps: true });

// Create and export the Leave Request model
const adminRegistation = model('AdminRegistation', adminRegistationSchema);
module.exports = { adminRegistation };
