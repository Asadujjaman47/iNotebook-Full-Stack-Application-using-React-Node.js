# iNotebook Full Stack Application using React, Node.js

This is a full-stack application developed using React on the frontend and Node.js on the backend. The application allows users to create and manage notes or tasks, which they can add, edit, or delete. To access these features, users must first sign up for the application with a unique name, email, and password. Once logged in, users can create notes or tasks and store them in the MongoDB database. The application also features user authentication and authorization to ensure secure access.

**[link](https://github.com/Asadujjaman47/iNotebook-Full-Stack-Application-using-React-Node.js.git)**

## Features

- User authentication and authorization
- CRUD functionality for notes or tasks
- Create a new user account
- Login with existing user credentials
- Add, update, and delete notes or tasks
- Unique user email validation

## Tech Stack

**Client:** React, Fetch API

**Server:** Node, Express, MongoDB

## Installation

To install this application, you will need to have Node.js and MongoDB installed on your system. Follow the steps below to get started:

1. Clone the repository from GitHub
2. Open a terminal and navigate to the 'client' directory using the 'cd' command
3. Run the command 'yarn' to install the necessary dependencies for the React frontend
4. Navigate to the 'server' directory using the 'cd' command
5. Run the command 'yarn' to install the necessary dependencies for the Node.js backend

```bash
  git clone https://github.com/Asadujjaman47/iNotebook-Full-Stack-Application-using-React-Node.js.git
```

### Frontend

```bash
  cd client
  yarn
```

### Backend

```bash
    cd server
    yarn
```

## Getting Started

To run the application locally, follow the steps below:

1. Open two terminals
2. Navigate to the 'client' directory in one terminal and run the command 'yarn dev'
3. Navigate to the 'server' directory in the other terminal and run the command 'nodemon index.js'

or

- Navigate to the 'client' directory in one terminal and run the command 'yarn both'

```bash
    cd client
    yarn both
```

This will start both the React frontend and Node.js backend servers.

## Running the App

This will start the app in development mode and open it in your default browser at http://localhost:3000.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`JWT_SECRET=YOUR_JWT_SECRET`

JWT_SECRET: This variable stores the secret key used for JSON Web Token (JWT) authentication.

## API Reference

The following API endpoints are available for this application:

### Authentication

Create a new user:

```http
POST /api/auth/createuser
```

Login:

```http
POST /api/auth/login
```

### Notes

Fetch all notes:

```http
GET /api/notes/fetchallnotes
```

Add note:

```http
POST /api/notes/addnote
```

Update note:

```http
PUT /api/notes/updatenote/:id
```

Delete note:

```http
DELETE /api/notes/deletenote/:id
```

## Lessons Learned

While working on this project, I learned the following:

- Creating a full-stack application using React and Node.js
- Managing state in a React application
- Developing user authentication and authorization using JSON Web Tokens (JWT)
- Working with MongoDB and Mongoose
- Using React Router for navigation
- Creating responsive designs using Bootstrap 5 and Font Awesome

These are valuable skills that I can apply to building more complex web applications in the future.

## Feedback

If you have any feedback, please reach out to us at asadujjaman255@gmail.com
