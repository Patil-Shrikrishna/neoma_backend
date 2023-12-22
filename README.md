# Task Management API

The Task Management API provides endpoints for user registration, authentication, and CRUD operations for managing tasks. This API uses JWT (JSON Web Tokens) for user authentication.

## Table of Contents

1. [User Registration and Login](#user-registration-and-login)
2. [Task CRUD Operations](#task-crud-operations)
3. [Task Filter](#task-filter)
4. [Endpoints](#endpoints)
5. [Authentication](#authentication)

### User Registration and Login

The API supports user registration and login functionality. Upon successful login, the API issues a JWT token, which is required for accessing task-related endpoints.

### Task CRUD Operations

Users can perform Create, Read, Update, and Delete operations on tasks.

### Task Filter

Tasks can be filtered based on their status, including incomplete, in-progress, or completed.

## Endpoints

### User Endpoints

- `POST /api/register`: Register a new user.
- `POST /api/login`: Login with existing credentials to receive a JWT token.

### Task Endpoints

- `POST /api/tasks`: Create a new task.
- `GET /api/tasks`: Retrieve all tasks.
- `GET /api/tasks/:id`: Retrieve a specific task by ID.
- `PUT /api/tasks/:id`: Update a specific task by ID.
- `DELETE /api/tasks/:id`: Delete a specific task by ID.
- `GET /api/tasks/filter/:status`: Filter tasks by status (incomplete, in-progress, completed).

## Authentication

The API uses JWT for authentication. After successful login, the API issues a token that should be included in the Authorization header of subsequent requests.

**Example Authorization header:**

`Authorization: YOUR_JWT_TOKEN`
