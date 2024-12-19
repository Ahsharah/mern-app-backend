# MERN Stack API Documentation
This document outlines the available endpoints and their usage for the MERN stack weather application API.

## Base URL
When running locally: `http://localhost:5000`
Production: `[Alexandria's Weather App Render URL]`

## Endpoints

### Create Item
- **POST** `/api/items`
- Creates a new item
- Request Body:
```json
{
  "name": "Item Name",
  "description": "Item Description",
  "price": 99.99,
  "category": "Category Name"
}
```
- Response: Created item object with 201 status code

### Get All Items
- **GET** `/api/items`
- Retrieves all items
- Response: Array of item objects

### Get Single Item
- **GET** `/api/items/:id`
- Retrieves a specific item by ID
- Response: Single item object or 404 if not found

### Update Item
- **PUT** `/api/items/:id`
- Updates an existing item
- Request Body: Same as POST, all fields optional
- Response: Updated item object or 404 if not found

### Delete Item
- **DELETE** `/api/items/:id`
- Deletes an item
- Response: Success message or 404 if not found

## Error Responses
All endpoints may return the following error response:
```json
{
  "message": "Error message",
  "error": "Detailed error information"
}
```

## Data Model
Item Schema:
- name: String (required)
- description: String (required)
- price: Number (required, min: 0)
- category: String (required)
- createdAt: Date (automatically set)