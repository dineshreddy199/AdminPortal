const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const employeeRoutes = require('./routes/employeeRoutes');
const hrLeaveRoutes = require('./routes/hrLeaveRoutes');
const employeeResignationRouters = require('./routes/employeeResignationRouters');
const hrResignationRouters = require('./routes/hrResignationRouters');
const adminRegistationRouters = require('./routes/adminRegistationRouters');
const leavesRouters = require('./routes/leavesRouters');
const employeeLeaveRouters = require('./routes/employeeLeaveRouters');
const employeeWithLeave = require('./routes/aggregated/employeeWithLeave');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:Admin@cluster0.upani9l.mongodb.net/employeeDB?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB Connection Failed:', err));

  
// Routes
app.use('/adminRegistation',adminRegistationRouters)
app.use('/employees', employeeRoutes);
app.use('/hrLeave',hrLeaveRoutes);
app.use('/employeeLeave',employeeLeaveRouters);
app.use('/employeeResignation',employeeResignationRouters);
app.use('/hrResign',hrResignationRouters);
app.use('/leaves',leavesRouters);
app.use('/employeeWithLeave', employeeWithLeave);

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
