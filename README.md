# 🔁 Zerodha Clone – Full Stack Trading Platform

A full-stack clone of the Zerodha trading platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project mimics the core functionality of a stock trading application including login/logout, dashboard, orders, holdings, and more.

---

## 🚀 Features

- 🔐 **User Authentication** (JWT & cookies)
- 🔁 **Session Management** with auto logout & redirection
- 📊 **Interactive Dashboard** (holdings, orders, positions, funds)
- 📦 **Protected Routes** using React Router
- ☁️ **Backend Deployment:** Render  
- 🌐 **Frontend Deployment:** Vercel
- 🧩 **Modular Codebase** with reusable components

---

## 🛠️ Tech Stack

| Frontend  | Backend | Database | Deployment |
|-----------|---------|----------|------------|
| React.js  | Node.js | MongoDB  | Vercel (FE), Render (BE) |

---

## 🔗 Live Demo

- 🌍 **Main Site:** [Zerodha Clone Frontend](https://zerodha-clone-prashant.vercel.app)
- ⚙️ **Backend API:** [Render Backend](https://zerodha-clone-odle.onrender.com)

---

## 🧑‍💻 How to Run Locally

### 🔸 1. Clone the repository
```bash
git clone https://github.com/PRASHANT-200320/ZERODHA-CLONE.git
cd ZERODHA-CLONE

🔸 2. Set up environment variables
Create a .env file in both frontend/ and backend/ directories:

backend/.env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
FRONTEND_URL=https://zerodha-clone-prashant.vercel.app

frontend/.env
REACT_APP_BACKEND_URL=https://zerodha-clone-odle.onrender.com
REACT_APP_MAIN_URL=https://zerodha-clone-prashant.vercel.app


🔸 3. Start the servers

# In one terminal
cd backend
npm install
npm start

# In another terminal
cd frontend
npm install
npm start


📁 Folder Structure

ZERODHA-CLONE/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── index.js
└── frontend/
    ├── public/
    └── src/
        ├── landing_page/
        └── dashboard/


