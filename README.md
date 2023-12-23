# Task Management API

## Table of Contents

1. [User Registration and Login](#user-registration-and-login)
2. [Task CRUD Operations](#task-crud-operations)
3. [Task Filter](#task-filter)
4. [Endpoints](#endpoints)
5. [Authentication](#authentication)
6. [Environment Variable](#environment-variable)

### User Registration and Login

The API supports user registration and login functionality. Upon successful login, the API issues a JWT token, which is required for accessing task-related endpoints.

### Task CRUD Operations

Users can perform Create, Read, Update, and Delete operations on tasks.

### Task Filter

Tasks can be filtered based on their status, including incomplete, in-progress, or completed.

## Endpoints

### User Endpoints

- `POST /api/register`: Register a new user.
- `POST /api/signin`: signin with existing credentials to receive a JWT token.
- `POST /api/signout`: signout the session.

### Task Endpoints

- `POST /task/create`: Create a new task.
- `GET /task/list`: Retrieve all tasks and filter tasks by status (incomplete, in-progress, completed).
- `PUT /task/update`: Update a specific task by ID.
- `DELETE /task/delete/`: Delete a specific task by ID.

## Authentication

The API uses JWT for authentication. After successful login, the API issues a token that should be included in the Authorization header of subsequent requests.

**Example Authorization header:**

`Authorization: YOUR_JWT_TOKEN`

## Environment Variables

The application utilizes certain environment variables stored in a .env file. You are required to provide these environment variables within your own .env file.

- `PORT` : To set a port to run the server
- `MONGO_URI` : To connect with mongoDB
- `JWT_SECRET` : To provide a secret key to encrypt/decrypt the password
