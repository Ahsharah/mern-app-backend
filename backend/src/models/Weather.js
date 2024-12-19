const express = require('express');
const axios = require('axios');
const Weather = require('../models/Weather'); // Import the Weather model
const router = express.Router(); // Create a router instance

// GET weather data from Meteomatics 🌦️
router.get('/:location', async (req, res) => {
    const location = req.params.location; // e.g., "48.8588443,2.2943506"
    const apiKey = `${process.env.METEOMATICS_USERNAME}:${process.env.METEOMATICS_PASSWORD}`;
    const apiUrl = `https://api.meteomatics.com/now/${location}/t_2m:C.json`;

    try {
        // Fetch weather data from the Meteomatics API
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`, // Basic Auth
            },
        });

        const weatherData = response.data;

        // Save data to MongoDB (optional)
        const newWeather = new Weather({
            location,
            temperature: weatherData.data[0].coordinates[0].dates[0].value,
            condition: 'Clear', // Replace with the actual condition from Meteomatics if available
        });
        await newWeather.save();

        // Send weather data back to the client
        res.status(200).json({
            location,
            temperature: weatherData.data[0].coordinates[0].dates[0].value,
            condition: 'Clear',
        });
    } catch (err) {
        console.error('❌ Error fetching weather data:', err);
        res.status(500).json({ error: 'Failed to fetch weather data!' });
    }
});

module.exports = router; // Export the router
