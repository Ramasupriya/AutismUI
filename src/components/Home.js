import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  CssBaseline
} from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

const carouselImages = [
  '/1.jpg',
  '/2.png',
  '/3.webp',
  '/4.webp',
  '/9.webp',
  '/10.png',
];

const drawerWidth = 180;

const pages = ['Home', 'Upload Video', 'Reports', 'Logout'];
const routes = ['/', '/upload', '/reports', '/logout'];

const Home = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          ml: `${drawerWidth}px`, backgroundColor: '#9FB3DF',
        }}
      >
        <Toolbar>
          <img
            src="ribbon.png" // or use your local image path
            alt="Autism Logo"
            style={{ height: '50px', marginRight: '15px', marginLeft: '10px' }}
          />
          <Typography variant="h6" noWrap component="div">
            Autism Spectrum
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: '20px', backgroundColor: '#DBDBDB'
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {pages.map((text, index) => (
              <ListItem button key={text} onClick={() => navigate(routes[index])}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Carousel Section */}
      <Box sx={{ marginLeft: `${drawerWidth}px`, marginTop: '80px', padding: 3 }}>
        <Slider {...settings}>
          {carouselImages.map((img, index) => (
            <Box key={index}>
              <div style={{ padding: '10px', textAlign: 'center' }}>
                <img
                  src={img}
                  alt={`slide-${index}`}
                  style={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius:'10%'
                  }}
                />
              </div>
            </Box>
          ))}
        </Slider>
      </Box>

    </>
  );
};

export default Home;
