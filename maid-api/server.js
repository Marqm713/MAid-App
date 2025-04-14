const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/users');
const medRoutes = require('./routes/medications');
const drugRoutes = require('./routes/drugs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: true,
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/medications', medRoutes);
app.use('/api/drugs', drugRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
