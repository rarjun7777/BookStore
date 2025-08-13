import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
=======
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
import Home from "./pages/HomeBook";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
<<<<<<< HEAD
import Profiles from "./pages/Profiles";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <div>
              <Navigation />
              <Home />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/books/create" element={
          <ProtectedRoute>
            <div>
              <Navigation />
              <CreateBook />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/books/details/:id" element={
          <ProtectedRoute>
            <div>
              <Navigation />
              <ShowBook />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/books/edit/:id" element={
          <ProtectedRoute>
            <div>
              <Navigation />
              <EditBook />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/books/delete/:id" element={
          <ProtectedRoute>
            <div>
              <Navigation />
              <DeleteBook />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/profiles" element={
          <ProtectedRoute>
            <div>
              <Navigation />
              <Profiles />
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
=======

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
  );
};

export default App;
