const express = require('express');
const router = express.Router();
const Weather = require('../models/Weather');

// GET all weather data
router.get('/', async (req, res) => {
    try {
        const weatherData = await Weather.find();
        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching weather:', error);
        res.status(500).json({ message: error.message });
    }
});

// POST new weather data
router.post('/', async (req, res) => {
    try {
        const weather = new Weather({
            location: req.body.location,
            temperature: req.body.temperature,
            conditions: req.body.conditions,
            humidity: req.body.humidity,
            windSpeed: req.body.windSpeed
        });
        
        const savedWeather = await weather.save();
        res.status(201).json(savedWeather);
    } catch (error) {
        console.error('Error saving weather:', error);
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;