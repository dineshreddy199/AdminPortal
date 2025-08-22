const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const employeeLeaveSchema = new Schema({
  employeeId: { type: String, required: true, unique: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  reason: { type: String, required: true }
}, { timestamps: true });

const employeeLeave = model('EmployeeLeave', employeeLeaveSchema);
module.exports = { employeeLeave };
