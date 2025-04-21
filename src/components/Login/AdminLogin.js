import React, { useState } from 'react';
import { TextField, Box, Grid, Button, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Input Handlers
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError('');
  };

 

  // Login Handler
  const handleLogin = () => {
    if (email === 'Admin@miraclesoft.com' && password === 'Admin123') {
        navigate('/admin');
      } 
    else {
      if (!email) setEmailError('Email is required');
      if (!password) setPasswordError('Password is required');
    }
  };


 

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://st4.depositphotos.com/3441621/28233/i/450/depositphotos_282336788-stock-photo-smiling-medical-doctor-woman-with.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        {/* Email Field */}
        <Box sx={{ mb: 2 }}>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            onChange={handleEmailChange}
            error={Boolean(emailError)}
            helperText={emailError}
          />
        </Box>

        {/* Password Field */}
        <Box sx={{ mb: 2 }}>
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            fullWidth
            onChange={handlePasswordChange}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
        </Box>

        {/* Login Button */}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Login
          </Button>
        </Box>

        {/* Forget Password & Signup Links */}
        
      </Box>
    </Grid>
  );
};

export default AdminLogin;
