const express = require('express');
const axios = require('axios');
const Weather = require('../models/Weather');
const router = express.Router();

// GET Weather Data from Meteomatics 🌍
router.get('/:location', async (req, res) => {
    const location = req.params.location; // e.g., "48.8588443,2.2943506" for Paris
    const apiKey = `${process.env.METEOMATICS_USERNAME}:${process.env.METEOMATICS_PASSWORD}`;
    const apiUrl = `https://api.meteomatics.com/now/${location}/t_2m:C.json`;
    try {
        // Fetch weather data from the Meteomatics API
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`, // Encode API key for Basic Auth
            },
        });

        const weatherData = response.data;

        // Save to MongoDB (optional)
        const newWeather = new Weather({
            location,
            temperature: weatherData.data[0].coordinates[0].dates[0].value,
            condition: 'Clear', // Update this field based on Meteomatics response if available
        });
        await newWeather.save();

        // Return weather data to the client
        res.status(200).json({
            location,
            temperature: weatherData.data[0].coordinates[0].dates[0].value,
            condition: 'Clear', // Update this field based on Meteomatics response
        });
    } catch (err) {
        console.error('❌ Error fetching weather data:', err);
        res.status(500).json({ error: 'Failed to fetch weather data!' });
    }
});

module.exports = router;