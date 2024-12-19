const mongoose = require('mongoose');

// Define the Weather schema 🌦️
const WeatherSchema = new mongoose.Schema({
    location: { type: String, required: true }, // Latitude and longitude of the location
    temperature: { type: String }, // Temperature in °C
    condition: { type: String }, // Weather condition (e.g., Clear, Rainy)
    date: { type: Date, default: Date.now }, // Timestamp for when the data was fetched
});

module.exports = mongoose.model('Weather', WeatherSchema);
