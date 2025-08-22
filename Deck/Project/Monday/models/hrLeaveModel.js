const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const hrLeaveSchema = new Schema({
  employeeId: { type: String, required: true, unique: true },
  startDate: { type: String, required: true,default:'11-07-2025' },
  endDate: { type: String, required: true,default:'13-07-2025' },
  reason: { type: String, required: true,default:'Health Issue due to Network Error' },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
}, { timestamps: true });

const hrLeave = model('HrLeave', hrLeaveSchema);
module.exports = { hrLeave };
