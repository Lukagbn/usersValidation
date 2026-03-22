# Users Auth App

A full-stack login and registration web app built with Node.js, Express, MongoDB, and Vanilla JavaScript.

## Features

- Register a new user with first name, last name, email, password, and gender
- Login with email and password
- Form validation (email format, password strength, matching passwords)
- Password show/hide toggle
- Duplicate email detection
- Backend deployed on Render
- Frontend deployable on GitHub Pages

## Tech Stack

**Backend**
- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- CORS

**Frontend**
- HTML
- CSS
- Vanilla JavaScript

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas account

### Backend Setup

1. Clone the repo and navigate to the backend folder:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   node server.js
   ```

Server runs on `http://localhost:4000`

### Frontend Setup

Open `index.html` with Live Server or any static server.

Make sure the fetch URL in your JS points to the correct backend URL:
```javascript
const BASE_URL = "http://localhost:4000"; // or your Render URL
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| POST | `/users` | Register a new user |
| POST | `/users/auth` | Login |

### Register

**POST** `/users`

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "Password1!",
  "gender": true
}
```

### Login

**POST** `/users/auth`

```json
{
  "email": "john@example.com",
  "password": "Password1!"
}
```

## Backend Repo
- https://github.com/Lukagbn/usersDb

## Deployment

- **Backend:** [Render](https://render.com) — connect your GitHub repo, set `MONGO_URI` in environment variables
- **Frontend:** [GitHub Pages](https://pages.github.com) — enable Pages in repo settings

## Validation Rules

- First and last name: letters only, at least 3 characters
- Email: valid email format
- Password: at least 8 characters, one capital letter, one special character, no backticks
- Re-password: must match password
- Gender: required
