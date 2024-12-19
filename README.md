# Weather MERN App Backend

A backend service for the Weather MERN application using Express.js and MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with:
```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
METEOMATICS_USERNAME=your_username
METEOMATICS_PASSWORD=your_password
```

3. Run the development server:
```bash
npm run dev
```

## API Endpoints

### Weather Routes
- GET `/api/weather` - Get all weather records
- POST `/api/weather` - Create a new weather record
- GET `/api/weather/:id` - Get a specific weather record
- PUT `/api/weather/:id` - Update a weather record
- DELETE `/api/weather/:id` - Delete a weather record

## Development
- Server runs on port 5001 by default
- Uses nodemon for development auto-reload