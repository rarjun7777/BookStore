<<<<<<< HEAD
# BookStore Frontend

This is the frontend application for the BookStore project, built with React.js and Vite.

## Overview

The frontend provides a modern, responsive user interface for the BookStore application with the following key features:

- **Authentication System**: Login and registration
- **Book Management**: Create, read, update, and delete books
- **User Profiles**: View other users' profiles and book collections
- **Modern UI**: Clean design with Tailwind CSS and light blue theme

## Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Notistack** - Notification system
- **Context API** - State management

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── home/           # Book display components
│   ├── Navigation.jsx  # Main navigation
│   ├── ProtectedRoute.jsx  # Route protection
│   └── Spinner.jsx     # Loading spinner
├── context/
│   └── AuthContext.jsx # Authentication state
├── pages/              # Page components
│   ├── Login.jsx       # Login page
│   ├── Register.jsx    # Registration page
│   ├── HomeBook.jsx    # Main book listing
│   ├── CreateBook.jsx  # Add new book
│   ├── ShowBook.jsx    # Book details
│   ├── EditBook.jsx    # Edit book
│   ├── DeleteBook.jsx  # Delete book
│   └── Profiles.jsx    # User profiles
├── utils/
│   └── api.js          # API configuration
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## Development

This frontend connects to the backend API running on `http://localhost:5555`. Make sure the backend server is running before starting the frontend development server.

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Protected Routes**: Authentication required for book management
- **Real-time Updates**: Immediate UI updates after API calls
- **Error Handling**: User-friendly error messages
- **Loading States**: Smooth loading animations
- **Form Validation**: Client-side and server-side validation
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
