const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const weatherRoutes = require('./routes/weatherRoutes');

// Use routes
app.use('/api/weather', weatherRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✨ Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Basic test route
app.get('/test', (req, res) => {
    res.json({ message: "Server is running!" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});