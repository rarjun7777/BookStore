<<<<<<< HEAD
# BookStore with Authentication System

A modern book management application with comprehensive user authentication and a beautiful light blue UI. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

### 🔐 Authentication System
- **User Registration**: Create new accounts with username, email, and password
- **User Login**: Secure login with email and password
- **JWT Token Authentication**: Secure token-based authentication with 7-day expiration
- **Protected Routes**: All book management features require authentication
- **Account Management**: Users can delete their accounts and all associated books

### 📚 Book Management
- **View Books**: Display book information in table or card view with toggle functionality
- **Add Books**: Create new book entries with title, author, and publish year
- **Edit Books**: Update existing book information (title, author, publish year)
- **Delete Books**: Remove book entries from the collection
- **Book Details**: View detailed information about each book entry
- **User-Specific Books**: Each user can only manage their own book collection

### 👥 User Profiles
- **Profile Viewing**: View other users' profiles and their book collections
- **User Statistics**: See how many book entries each user has added
- **Profile Privacy**: Users can only see other users' profiles, not their own

### 🎨 User Interface
- **Modern Design**: Clean, responsive design with light blue theme
- **Beautiful Forms**: Well-designed authentication forms with validation
- **Loading States**: Smooth loading animations and feedback with spinner component
- **Error Handling**: User-friendly error messages and notifications
- **Success Feedback**: Clear success notifications using notistack
- **Navigation**: Intuitive navigation with protected route handling

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication (7-day token expiration)
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

### Frontend
- **React.js** with Vite for fast development
- **React Router DOM** for navigation
- **Axios** for API calls
- **Tailwind CSS** for styling
- **React Icons** for icons
- **Context API** for state management
- **Notistack** for notifications

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment**:
   - Update `config.js` with your MongoDB connection string

4. **Start the server**:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5555`

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication Routes (`/auth`)
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login

### Book Routes (`/books`) - All require authentication
- `GET /books` - Get all book information for the authenticated user
- `POST /books` - Create new book entry (requires title, author, publishYear)
- `GET /books/:id` - Get book information by ID (user's own books only)
- `PUT /books/:id` - Update book information (user's own books only)
- `DELETE /books/:id` - Delete book entry (user's own books only)

### User Routes (`/users`) - All require authentication
- `GET /users/profiles` - Get all user profiles (excluding current user) with their book collections
- `DELETE /users/account` - Delete user account and all associated book entries



## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **JWT Tokens**: Secure token-based authentication with 7-day expiration
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured CORS for security
- **User Isolation**: Users can only access and modify their own book information
- **Protected Routes**: All sensitive operations require authentication

## User Flow

1. **Registration**: Users can create accounts with unique username and email
2. **Login**: Users authenticate with email and password
3. **Book Management**: Authenticated users can manage their personal book information collection
4. **Profile Browsing**: Users can view other users' profiles and book collections
5. **Account Deletion**: Users can delete their accounts and all associated book entries
6. **Logout**: Users can securely log out, clearing their session

## File Structure

```
BookStore-master/
├── backend/
│   ├── config.js              # Database and server configuration
│   ├── index.js               # Main server file
│   ├── models/
│   │   ├── bookModel.js       # Book schema and model
│   │   └── userModel.js       # User schema and model
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication endpoints
│   │   ├── bookRoutes.js      # Book CRUD operations
│   │   └── userRoutes.js      # User profile management
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── BookModal.jsx
│   │   │   │   ├── BooksCard.jsx
│   │   │   │   ├── BookSingleCard.jsx
│   │   │   │   └── BooksTable.jsx
│   │   │   ├── Navigation.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Spinner.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx # Authentication state management
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── HomeBook.jsx
│   │   │   ├── CreateBook.jsx
│   │   │   ├── ShowBook.jsx
│   │   │   ├── EditBook.jsx
│   │   │   ├── DeleteBook.jsx
│   │   │   └── Profiles.jsx
│   │   ├── utils/
│   │   │   └── api.js         # API configuration
│   │   └── App.jsx            # Main application component
│   └── package.json
├── Notes.txt                  # Development notes and guidelines
└── README.md
```

## Development Notes

- **JWT Secret**: Uses a default secret key. Change this in production.
- **Database**: Uses MongoDB with Mongoose for data modeling.
- **Frontend**: Built with Vite for fast development and optimized builds.
- **Styling**: Uses Tailwind CSS for utility-first styling approach.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).






=======
# Book Store

## Frameworks
### MERN
- MongoDB
- Express.js
- React.js
- Node.js

## How to Use It

1. Download the repository and navigate to the frontend and backend folders.
   
2. Run the following commands in separate terminals for the frontend and backend:

    ```sh
    # In the frontend folder
    npm i
    npm run dev
    ```

    ```sh
    # In the backend folder
    npm i
    npm run dev
    ```

3 . Navigate to the link http://localhost:5173/

4 . Create, Read, Update, and Delete books as per your wish.





>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
