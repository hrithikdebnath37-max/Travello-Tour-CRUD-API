# Travello Tour CRUD API

A RESTful backend API for managing tour information, built using **Node.js, Express.js, MongoDB, and Mongoose**.

This project demonstrates the implementation of basic CRUD operations (Create, Read, Update, Delete) for managing tour records through REST API endpoints.

## 📌 Project Overview

Travello Tour CRUD API is a backend application developed as part of the Module 12 Assignment.

The application allows users to create, retrieve, update, and delete tour information stored in a MongoDB database.

The main objective is to practice backend development, database integration, RESTful API design, and API testing.

## ✨ Key Features

- Express.js server setup
- MongoDB database connection
- Mongoose schema and model creation
- RESTful API development
- Create new tour records
- Retrieve all available tours
- Update existing tour information
- Delete tour records
- API testing using Postman or Thunder Client

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| MongoDB | NoSQL Database |
| Mongoose | MongoDB Object Modeling |
| Postman | API Testing |
| Claude Code | Code understanding and debugging assistance |

## 📂 Project Structure

```text
travello-tour-api/
│
├── models/
│   └── Tour Model
│
├── routes/
│   └── Tour Routes
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## 🗃️ Tour Model

The Tour model contains the following fields:

| Field | Description |
|---|---|
| title | Name of the tour |
| location | Tour destination |
| price | Tour price |
| description | Details about the tour |

### Example Tour Data

```json
{
  "title": "Cox's Bazar Tour",
  "location": "Cox's Bazar",
  "price": 5000,
  "description": "Enjoy a beautiful sea beach tour."
}
```

## 🚀 API Endpoints

The application provides four main CRUD endpoints.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tours` | Create a new tour |
| GET | `/api/tours` | Retrieve all tours |
| PUT | `/api/tours/:id` | Update a tour |
| DELETE | `/api/tours/:id` | Delete a tour |

### 1. Create Tour

**Method:** POST

**Endpoint:** `/api/tours`

Creates a new tour in the MongoDB database.

Request Body:

```json
{
  "title": "Cox's Bazar Tour",
  "location": "Cox's Bazar",
  "price": 5000,
  "description": "Enjoy a beautiful sea beach tour."
}
```

### 2. Get All Tours

**Method:** GET

**Endpoint:** `/api/tours`

Retrieves all tour records from the database.

### 3. Update Tour

**Method:** PUT

**Endpoint:** `/api/tours/:id`

Updates the information of an existing tour using its MongoDB ID.

Example Request Body:

```json
{
  "title": "Updated Cox's Bazar Tour",
  "location": "Cox's Bazar",
  "price": 6000,
  "description": "Enjoy an amazing beach experience."
}
```

### 4. Delete Tour

**Method:** DELETE

**Endpoint:** `/api/tours/:id`

Deletes a specific tour using its ID.

Example Success Response:

```json
{
  "message": "Tour deleted successfully"
}
```

## ⚙️ Installation & Setup

### Prerequisites

- Node.js
- MongoDB
- npm
- Postman or Thunder Client

### 1. Clone the Repository

```bash
git clone https://github.com/hrithikdebnath37-max/travello-tour-api.git
```

### 2. Navigate to the Project Directory

```bash
cd travello-tour-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

If your application uses environment variables, create a `.env` file and configure your MongoDB connection.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5. Start the Server

Use the start script configured in your `package.json`.

```bash
npm start
```

## 🧪 API Testing

The API can be tested using Postman or Thunder Client.

The following operations should be tested:

- POST: Create a new tour
- GET: Retrieve all tours
- PUT: Update an existing tour
- DELETE: Delete a tour

## 🎯 Learning Outcomes

Through this project, I practiced:

- Setting up a backend server using Node.js and Express.js
- Connecting MongoDB with an Express application
- Creating Mongoose models and schemas
- Designing RESTful API endpoints
- Implementing CRUD operations
- Handling API requests and responses
- Testing APIs using Postman
- Understanding and debugging code with Claude Code

## 👨‍💻 Developer

**Rithik Debnath**

Computer Science & Engineering Student  
United International University

GitHub: [hrithikdebnath37-max](https://github.com/hrithikdebnath37-max)

---

⭐ Thank you for visiting this repository!
