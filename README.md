# Bus Reservation System

This is a full-stack web application for a bus reservation system, built as a college practical task. It allows users to view available buses, create user accounts, and book seats on a bus.

## Technology Stack

This project is built using the MERN stack:

*   **MongoDB:** A NoSQL database used to store data for users, buses, and bookings. We use MongoDB Atlas for cloud hosting.
*   **Express.js:** A web application framework for Node.js that provides a robust set of features for building the backend API.
*   **React:** A JavaScript library for building the user interface. The frontend is a single-page application created with Create React App.
*   **Node.js:** A JavaScript runtime used to run the server-side code.

## Features

*   **User Management:** Create new user accounts.
*   **Bus Management:** Add new buses with details like route, date, seats, and driver information.
*   **View Buses:** See a list of all available buses.
*   **Booking:** Book seats on a specific bus for a registered user.

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js and npm](https://nodejs.org/)
*   A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for the database.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### 1. Clone the Repository

First, clone this repository to your local machine.

```bash
git clone <repository-url>
cd bus-system
```

### 2. Backend Setup

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    *   Create a file named `.env` in the `server` directory.
    *   Open the `.env` file and add your MongoDB connection string. You can get this from your MongoDB Atlas dashboard.
    ```
    MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
    PORT=5000
    ```
    *   Replace `<username>`, `<password>`, `<cluster-url>`, and `<database-name>` with your actual credentials.

4.  **Start the backend server:**
    ```bash
    npm start
    ```
    The server will be running on `http://localhost:5000`.

### 3. Frontend Setup

1.  **Navigate to the client directory in a new terminal:**
    ```bash
    cd client
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the frontend development server:**
    ```bash
    npm start
    ```
    The application will open automatically in your web browser at `http://localhost:3000`.

## API Endpoints

The backend server exposes the following API endpoints:

*   `GET /users`: Get a list of all users.
*   `POST /users/add`: Add a new user.
*   `GET /buses`: Get a list of all buses.
*   `POST /buses/add`: Add a new bus.
*   `GET /bookings`: Get a list of all bookings.
*   `POST /bookings/add`: Create a new booking.

## Screenshots

Here are some screenshots of the application:

### Create New Bus
![Create New Bus](img/Screenshot%202026-05-07%20215910.png)

### Available Buses
![Available Buses](img/Screenshot%202026-05-07%20215919.png)

### Create New User
![Create New User](img/Screenshot%202026-05-07%20215926.png)

### Create New Booking
![Create New Booking](img/Screenshot%202026-05-07%20215934.png)
