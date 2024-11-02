import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import store, { persistor } from './app/store';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/HomePage/FooterSection';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import DemoPage from './Components/DemoPage/DemoPage';
import EmployerLayout from './Components/JobPost/EmployerLayout';
import JobSeekerLayout from './Components/JobSeeker/JobSeekerLayout';

// PrivateRoute Component for Protected Routes
function PrivateRoute({ children, requiredRole }) {
  const { token, role } = useSelector((state) => state.auth);
  
  if (!token) {
    return <Navigate to="/" replace />;
  }
  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  return children;
}

// Component for the DemoPage route, redirects to dashboard if token exists
function RestrictedDemoPage() {
  const { token, role } = useSelector((state) => state.auth);

  if (token) {
    // Redirect based on user role
    const dashboardPath = role === "job-seeker" ? "/jobseeker/dashboard" : "/employer/dashboard";
    return <Navigate to={dashboardPath} replace />;
  }

  return <DemoPage />;
}

// PublicRoute Component to protect Login/Register for logged-in users
function PublicRoute({ children }) {
  const { token } = useSelector((state) => state.auth);
  return !token ? children : <Navigate to="/" replace />;
}

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* Conditionally Render Navbar for Logged-in Users */}
          {token && <Navbar />}

          <Box className="appsection" sx={{ minHeight: '100vh', pt: token ? '64px' : '0' }}>
            <Routes>
              {/* Restricted DemoPage Route */}
              <Route path="/" element={<RestrictedDemoPage />} />

              {/* Public Routes */}
              <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

              {/* Job-Seeker Routes */}
              <Route
                path="/jobseeker/*"
                element={
                  <PrivateRoute requiredRole="job-seeker">
                    <JobSeekerLayout />
                  </PrivateRoute>
                }
              />

              {/* Employer Routes */}
              <Route
                path="/employer/*"
                element={
                  <PrivateRoute requiredRole="employer">
                    <EmployerLayout />
                  </PrivateRoute>
                }
              />

              {/* Catch-all Route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Box>

          {/* Conditionally Render Footer */}
          {!token && <Footer />}
          <ToastContainer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
