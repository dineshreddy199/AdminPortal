const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const hrLeaveSchema = new Schema({
  employeeId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  designation: { type: String, required: true },
  mobile: { type: String, required: true, unique: true }
}, { timestamps: true });

const hrLeave = model('HrLeave', hrLeaveSchema);
module.exports = { hrLeave };
