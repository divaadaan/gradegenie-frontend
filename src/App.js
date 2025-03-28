import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import ClassroomSetup from './views/ClassroomSetup';
import ReportingSession from './views/ReportingSession';
import Extract from './views/Extract';
//import { useAuth } from './contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  return children; // Allow access to all routes for now
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route 
          path="/classroom" 
          element={
            <PrivateRoute>
              <ClassroomSetup />
            </PrivateRoute>
          }
        />
        <Route 
          path="/reporting" 
          element={
            <PrivateRoute>
              <ReportingSession />
            </PrivateRoute>
          }
        />
        <Route 
          path="/extract" 
          element={
            <PrivateRoute>
              <Extract />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

