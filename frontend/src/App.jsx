import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import Home from "./pages/HomeBook";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
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
  );
};

export default App;
