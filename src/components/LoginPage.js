import React, { useState } from 'react';
import { TextField, Box, Grid, Button, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();




  return (
    <Grid
      sx={{
        height: '100vh', // Full height of the viewport
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://st4.depositphotos.com/3441621/28233/i/450/depositphotos_282336788-stock-photo-smiling-medical-doctor-woman-with.jpg)', // Background image with transparency
        backgroundSize: 'cover', // Make sure the image covers the full container
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent repetition of the background image
      }}
    >
      <Box
        variant="contained"
        sx={{
          fontSize: '25px',
          backgroundColor: '#FFFFFF', // White background
          color: '#4682B4', // Sea green color for the text
          borderRadius: 2, // Rounded corners
          padding: '8px 16px', // Padding for a better look
          boxShadow: 2, // Subtle shadow for depth
          textTransform: 'none', // Prevents text from being capitalized
          fontWeight: 'bold', // Bold text for better visibility
          
          mb: 3, // Margin-bottom for spacing between the button and the grid container
        }}

      >
        Login as
      </Box>



      <Grid container spacing={3} justifyContent="center">
        <Grid item>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4682B4', // Sea blue
              color: '#FFFFFF', // White text
              borderRadius: '50%',
              height: 110,
              width: 110,
              fontSize: '0.9rem',
              display: 'flex', // Flex to align the image inside the button
              justifyContent: 'center', // Center the image inside the button
              alignItems: 'center', // Center the image vertically
              '&:hover': {
                backgroundColor: '#5A9BD5', // Slightly lighter blue on hover
              },
            }}
            onClick={() =>navigate('/adminLogin')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/12724/12724695.png"
              alt="Admin Logo"
              style={{
                height: '60px', // Image height
                width: '65px', // Image width
              }}
            />
          </Button>

          <Typography sx={{ marginTop: 1 }}>Admin</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4682B4', // Sea blue
              color: '#FFFFFF', // White text
              borderRadius: '50%',
              height: 110,
              width: 110,
              fontSize: '0.9rem',
              display: 'flex', // Flex to align the avatar inside the button
              justifyContent: 'center', // Center the avatar inside the button
              alignItems: 'center', // Center the avatar vertically
              '&:hover': {
                backgroundColor: '#5A9BD5', // Slightly lighter blue on hover
              },
            }}
            onClick={() => navigate('/doctorLogin')}
          >
            <img
              alt="Receptionist Avatar"
              src="https://cdn-icons-png.flaticon.com/128/9570/9570587.png"
              style={{
                height: '75px', // Image height
                width: '75px', // Image width
              }}
            />
          </Button>

          <Typography sx={{ marginTop: 1 }}>Doctor</Typography>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4682B4', // Sea blue
              color: '#FFFFFF', // White text
              borderRadius: '50%',
              height: 110,
              width: 110,
              fontSize: '0.9rem',
              display: 'flex', // Flex to align the image inside the button
              justifyContent: 'center', // Center the image inside the button
              alignItems: 'center', // Center the image vertically
              '&:hover': {
                backgroundColor: '#5A9BD5', // Slightly lighter blue on hover
              },
            }}
            onClick={() => navigate('/patientLogin')}
          >
            <img
              src="./patient.png"
              alt="Doctor Logo"
              style={{
                height: '65px', // Image height
                width: '65px', // Image width
              }}
            />
          </Button>


          <Typography sx={{ marginTop: 1 }}>Patient</Typography>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default LoginPage;