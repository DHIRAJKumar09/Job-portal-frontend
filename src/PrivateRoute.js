// App.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children, roles = [] }) {
    const token = useSelector((state) => state.auth.token);
    const role = useSelector((state) => state.auth.role);
    
    if (!token) {
      return <Navigate to="/login" replace />;
    }
  
    // Check if user role is allowed for this route
    if (roles.length && !roles.includes(role)) {
      return <Navigate to="/home" replace />;
    }
  
    return children;
  }
  