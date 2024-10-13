const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/user');
const employeeRoutes = require('./Routes/employee');
require('./config/database');

const app = express();
app.use(express.json());

// Use user and employee routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/employee', employeeRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
