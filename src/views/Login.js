import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4">GradeGenie Login</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField 
            label="Username" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <TextField 
            label="Password" 
            variant="outlined" 
            type="password" 
            fullWidth 
            margin="normal" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
