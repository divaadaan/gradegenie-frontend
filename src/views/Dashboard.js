import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
//import { useAuth } from '../contexts/AuthContext';

  const Dashboard = () => {
    const navigate = useNavigate();
    const logout = () => {
      console.log("Logging out...");
      navigate("/login"); // Redirect to login or another page
    };

    const user = { name: "Guest" }; // Temporary user placeholder

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Welcome, {user.username}!</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={() => navigate('/classroom')} sx={{ mr: 2 }}>
            Classroom Setup
          </Button>
          <Button variant="contained" onClick={() => navigate('/reporting')} sx={{ mr: 2 }}>
            Reporting Session
          </Button>
          <Button variant="contained" onClick={() => navigate('/extract')}>
            Extract Report Cards
          </Button>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" onClick={() => { logout(); navigate('/login'); }}>
            Logout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
