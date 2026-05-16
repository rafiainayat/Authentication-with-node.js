# Authentication System - Frontend & Backend

A complete authentication system with responsive UI built with React, Tailwind CSS, Node.js, and Express.

## 📋 Features

- ✅ **User Signup** - Create new account with name, email, and password (min 6 characters)
- ✅ **Secure Password Hashing** - bcryptjs for password encryption
- ✅ **JWT Authentication** - Token-based authentication with 7-day expiration
- ✅ **Cookie Parser** - Secure cookie-based token storage
- ✅ **User Login** - Authenticate existing users
- ✅ **Protected Routes** - Home page only accessible to authenticated users
- ✅ **Responsive Design** - Works perfectly on all screen sizes
- ✅ **Beautiful UI** - Gradient theme with indigo, purple, and pink colors
- ✅ **Error Handling** - Comprehensive error messages and validation

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (already included) and update if needed:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/auth-db
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

4. Start the backend server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will automatically open at `http://localhost:3000`

## 📁 Project Structure

```
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── authController.js  # Auth logic (signup, login, logout)
│   ├── middleware/
│   │   └── auth.js            # JWT verification middleware
│   ├── models/
│   │   └── User.js            # User schema with bcrypt hashing
│   ├── routes/
│   │   └── authRoutes.js      # API routes
│   ├── server.js              # Express server setup
│   ├── package.json
│   └── .env                   # Environment variables
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── authAPI.js     # API calls to backend
    │   ├── context/
    │   │   └── AuthContext.js # Global auth state
    │   ├── components/
    │   │   └── ProtectedRoute.js  # Route protection
    │   ├── pages/
    │   │   ├── Signup.js      # Sign up page
    │   │   ├── Login.js       # Login page
    │   │   └── Home.js        # Welcome page
    │   ├── App.js             # Main app component
    │   ├── index.js           # React entry point
    │   └── index.css          # Global styles
    ├── public/
    │   └── index.html
    ├── package.json
    ├── tailwind.config.js
    └── postcss.config.js
```

## 🔐 Authentication Flow

1. **Signup Page**: User enters name, email, and password
   - Validates password length (min 6 characters)
   - Hashes password using bcryptjs
   - Creates user in MongoDB

2. **Login Page**: User enters email and password
   - Verifies credentials
   - Generates JWT token
   - Stores token in localStorage and cookie

3. **Home Page**: Shows welcome message
   - Displays user's name and email
   - Protected route - redirects to login if not authenticated
   - Logout button to clear authentication

## 🛡️ Security Features

- **Password Hashing**: Passwords hashed with bcryptjs (salt rounds: 10)
- **JWT Tokens**: 7-day expiration for enhanced security
- **Cookie Security**: HttpOnly, Secure (in production), SameSite
- **CORS**: Restricted to localhost:3000
- **Email Validation**: Built-in email format validation
- **Input Validation**: Frontend and backend validation

## 🎨 UI/UX Features

- **Gradient Background**: Indigo → Purple → Pink theme
- **Responsive Cards**: Mobile-first design
- **Input Validation**: Real-time error messages
- **Loading States**: Visual feedback during API calls
- **Smooth Transitions**: Hover effects and animations
- **Accessibility**: Proper labels and ARIA attributes

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All pages are fully responsive and work seamlessly on all devices.

## 🔧 API Endpoints

### POST /api/auth/signup
Create a new user account

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### POST /api/auth/login
Authenticate user with email and password

**Request body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### POST /api/auth/logout
Logout the current user (Protected)

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### GET /api/auth/me
Get current logged-in user details (Protected)

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## 🧪 Testing

1. **Signup Process**:
   - Go to http://localhost:3000
   - Fill in name, email, and password
   - Click "Sign Up"
   - Should redirect to home page

2. **Login Process**:
   - Click "Login here" link
   - Enter email and password from signup
   - Click "Login"
   - Should see welcome message

3. **Logout**:
   - Click "Logout" button on home page
   - Should redirect to login page

4. **Try accessing home without login**:
   - Clear localStorage in browser console
   - Visit http://localhost:3000/home
   - Should redirect to login page

## 🐛 Troubleshooting

### Backend won't start
- Make sure MongoDB is running: `mongod` (for local MongoDB)
- Check if port 5000 is available
- Verify .env file has correct MONGODB_URI

### Frontend shows "Network Error"
- Ensure backend is running on port 5000
- Check CORS settings in server.js
- Make sure both apps are using the correct URLs

### Password not accepting hashing
- Ensure bcryptjs is installed: `npm install bcryptjs`
- Restart the server after installing

## 📦 Dependencies

### Backend
- `express` - Web framework
- `mongoose` - MongoDB ORM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication
- `cookie-parser` - Cookie parsing
- `cors` - Cross-origin requests
- `dotenv` - Environment variables

### Frontend
- `react` - UI library
- `react-router-dom` - Routing
- `axios` - HTTP client
- `tailwindcss` - CSS framework

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

**Made with ❤️ using React, Node.js, and Tailwind CSS**
