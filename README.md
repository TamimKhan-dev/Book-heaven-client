# 📚 Book Heaven

🔗 **Live Website:**  
👉 https://cool-sopapillas-ca1f0f.netlify.app/

---

## 📝 Project Overview

**Book Heaven** is a modern and user-friendly online book platform where users can explore books in a clean, organized, and enjoyable way.  
The platform focuses on simplicity and usability, allowing readers to view detailed book information, interact through comments, and discover books that match their interests—all in one place.

---

## ✨ Key Features

🔹 **Detailed Book Pages**  
Each book has a dedicated detail page displaying description, price, rating, and cover image.

🔹 **User Comments System**  
Readers can share their thoughts and opinions, with comments stored and displayed instantly.

🔹 **Clean & Modern UI**  
A smooth and intuitive interface that enhances the browsing experience.

🔹 **Smart Rating Filters**  
Users can easily find books based on ratings.

🔹 **Fully Responsive Design**  
Optimized for **mobile, tablet, and desktop** devices.

---

## 🛠️ Technologies Used

### 🎨 Frontend
- React.js
- Tailwind CSS
- DaisyUI

### 🔐 Authentication
- Firebase Authentication

### 🧭 Routing
- React Router

### 📦 npm Packages
- lucide-react  
- react-hot-toast  
- react-icons  
- react-tooltip  
- sweetalert2  
- swiper  

### ⚙️ Build Tool
- Vite

---

## 🚀 How to Run This Project Locally

This project consists of a **frontend (React + Vite)** and a **backend (Node.js / Express)**. Follow the steps below to run both parts on your local machine.

---

### 📦 Prerequisites
Make sure you have the following installed:
- Node.js (v16 or higher recommended)
- npm or yarn
- Git

---

## 🖥️ Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TamimKhan-dev/Book-heaven-client.git
2. **Navigate to the frontend folder**
   ```bash
   cd <project-folder>/client
3. **Install frontend dependencies**
   ```bash
   npm install
4. **Create environment variables**
   ```bash
   VITE_API_URL=http://localhost:5000
   VITE_FIREBASE_API_KEY=your_firebase_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
5. **Run the frontend**
   ```bash
   npm run dev
6. **Open in browser**
   ```bash
   http://localhost:5173
   
---

## 🧠 Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TamimKhan-dev/Book-heaven-server-.git
2. **Navigate to the backend folder**
   ```bash
   cd <project-folder>/server
3. **Install backend dependencies**
   ```bash
   npm install
4. **Create environment variables**
   ```bash
   PORT=5000
   DB_URI=your_database_connection_string
   STRIPE_SECRET_KEY=your_stripe_secret_key
5. **Run the backend**
   ```bash
   node index.js
6. **Open in browser**
   ```bash
   http://localhost:5000
