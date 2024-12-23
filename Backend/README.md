# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their first name, last name, email, and password.

## Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The user's first name (minimum 3 characters).
  - `lastname` (string, optional): The user's last name (minimum 3 characters).
- `email` (string, required): The user's email address (must be a valid email).
- `password` (string, required): The user's password (minimum 6 characters).

Example:
```json# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their first name, last name, email, and password.

## Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The user's first name (minimum 3 characters).
  - `lastname` (string, optional): The user's last name (minimum 3 characters).
- `email` (string, required): The user's email address (must be a valid email).
- `password` (string, required): The user's password (minimum 6 characters).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your_jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing the validation errors.
  ```json
  {
    "error": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First Name must be atleast 3 character long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be atleast 6 character long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint allows an existing user to log in by providing their email and password.

## Request Body
The request body should be a JSON object containing the following fields:
- `email` (string, required): The user's email address (must be a valid email).
- `password` (string, required): The user's password (minimum 6 characters).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your_jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing the validation errors.
  ```json
  {
    "error": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be atleast 6 character long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Authentication Errors
- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing the error message.
  ```json
  {
    "message": "Invalid Email or Password"
  }
  ```

### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.
  ```json
  {
    "error": "Internal Server Error"
  }
  ```
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "your_jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing the validation errors.
  ```json
  {
    "error": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First Name must be atleast 3 character long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be atleast 6 character long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Body**: A JSON object containing the error message.
  ```json
  {
    "error": "Internal Server Error"
  }
  ```