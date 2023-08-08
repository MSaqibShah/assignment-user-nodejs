# Node.js User API Assignment

This is a Node.js application that provides API endpoints for managing user information. It uses MongoDB as the database and implements authentication for secure access.

## Features

- Get one/all users
- Create users
- Update users
- Delete users
- User registration
- User login

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Authentication (Implements JWT authentication)

## Installation

1. Clone the repository: `git clone https://github.com/MSaqibShah/assignment-user-nodejs.git`
2. Install dependencies: `npm install`

## Configuration

1. Set the required environment variables in the `.env` file, such as database connection details, secret keys, etc.

## Usage

1. Run the application: `npm run dev`
2. Access the API endpoints using a tool like Postman or any API client.

## API Endpoints

- `POST /api/auth/register`: User registration
- `POST /api/auth/login`: User login
- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get one user by ID
- `PATCH /api/users/:id`: Update a user by ID
- `DELETE /api/users/:id`: Delete a user by ID

## Documentation

- View the [Postman Documentation](https://github.com/MSaqibShah/assignment-user-nodejs/blob/main/Assignment%20User%20Node.postman_collection.json) for detailed API documentation.
