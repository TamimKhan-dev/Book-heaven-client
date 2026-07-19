# 📚 Book Heaven

Book Heaven is a modern and user-friendly online book platform where users can explore books in a clean, organized, and enjoyable way. The platform focuses on simplicity and usability, allowing readers to browse books, view detailed information, interact through comments, and discover books that match their interests—all in one place.

---

## 🌐 Live Links

- **Live URL:** https://cool-sopapillas-ca1f0f.netlify.app/
- **Backend API URL:** https://book-heaven-api-server-eight.vercel.app
- **Backend Repository URL:** https://github.com/TamimKhan-dev/Book-heaven-server-

---

## ✨ Key Features

- 📖 **Detailed Book Pages**  
  Each book has a dedicated detail page displaying its description, price, rating, and cover image.

- 💬 **User Comments System**  
  Readers can share their thoughts and opinions, with comments stored and displayed instantly.

- 🎨 **Clean & Modern UI**  
  A smooth and intuitive interface that enhances the browsing experience.

- ⭐ **Smart Rating Filters**  
  Users can easily discover books based on ratings.

- 📱 **Fully Responsive Design**  
  Optimized for **mobile, tablet, and desktop** devices.

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Tailwind CSS
- DaisyUI

### Authentication

- Firebase Authentication

### Routing

- React Router

### npm Packages

- lucide-react
- react-hot-toast
- react-icons
- react-tooltip
- sweetalert2
- swiper

### Build Tool

- Vite

---

# 📦 Project Setup

This project consists of a **frontend (React + Vite)** and a **backend (Node.js + Express)**.

## 📋 Prerequisites

Before getting started, make sure you have installed:

- Node.js (v16 or later)
- npm
- Git

---

## 🖥️ Frontend Setup

### 1. Clone the Repository

```bash
git clone https://github.com/TamimKhan-dev/Book-heaven-client.git
cd Book-heaven-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env.local` file in the project root and add the following:

```env
VITE_API_URL=YOUR_BACKEND_API_URL

VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```

### 4. Run the Frontend

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## 🧠 Backend Setup

### 1. Clone the Repository

```bash
git clone https://github.com/TamimKhan-dev/Book-heaven-server-.git
cd Book-heaven-server-
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the project root and add the following:

```env
PORT=5000
DB_URI=YOUR_DATABASE_CONNECTION_STRING
```

### 4. Run the Backend

```bash
node index.js
```

The backend server will be available at:

```text
http://localhost:5000
```
