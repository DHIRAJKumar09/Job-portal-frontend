import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './DemoPage.css'

const DemoPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleSignup = () => {
    navigate('/register'); // Navigate to the signup page
  };

  // Sample feature data
  const features = [
    {
      id: 1,
      title: 'Job Search',
      description: 'Easily search for jobs based on your skills and preferences.',
    },
    {
      id: 2,
      title: 'Resume Builder',
      description: 'Create a professional resume with our easy-to-use builder.',
    },
    {
      id: 3,
      title: 'Job Alerts',
      description: 'Get notifications for new job postings that match your criteria.',
    },
    {
      id: 4,
      title: 'Company Reviews',
      description: 'Read reviews from employees about companies before applying.',
    },
  ];

  // Sample premium benefits data
  const premiumBenefits = [
    {
      id: 1,
      title: 'Profile Boost',
      description: 'Get your profile highlighted to employers.',
    },
    {
      id: 2,
      title: 'Priority Support',
      description: 'Receive priority customer support for your queries.',
    },
    {
      id: 3,
      title: 'Exclusive Job Listings',
      description: 'Access job postings that are only available to premium members.',
    },
    {
      id: 4,
      title: 'Interview Coaching',
      description: 'Get expert tips and coaching for your interviews.',
    },
  ];

  return (
    <Container maxWidth="lg" 
       sx={{
        paddingTop: { xs: '90rem', sm: '35rem', md: '40rem' }, // Adjust padding for smaller screens
      }}
     className="container">
      <Container maxWidth="lg" className="container">
      {/* Header Section with Clip Path */}
      <Box sx={{
          backgroundColor: '#3f51b5',
          padding: '40px 0',
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="header">
          <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
            Welcome to Our Job Portal
          </Typography>
          <Typography variant="h6" sx={{ color: 'white' }}>
            Discover your dream job with us. Sign up now to unlock premium features!
          </Typography>
        </div>
      </Box>

      {/* Features Section */}
      <Typography variant="h4" className="features-section">
        Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.id}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" className="card-title">
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="card-description">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Premium Benefits Section */}
      <Typography variant="h4" className="premium-benefits-section">
        Premium Member Benefits
      </Typography>
      <Grid container spacing={4}>
        {premiumBenefits.map((benefit) => (
          <Grid item xs={12} sm={6} md={3} key={benefit.id}>
            <Card className="card" sx={{ position: 'relative', overflow: 'hidden' }}>
              <Box
                sx={{
                  clipPath: 'circle(50% at 50% 0)',
                  backgroundColor: '#e3f2fd',
                  position: 'absolute',
                  top: '-50%',
                  left: '0',
                  right: '0',
                  height: '200px',
                  zIndex: 0,
                }}
              />
              <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h5" className="card-title">
                  {benefit.title}
                </Typography>
                <Typography variant="body2" className="card-description">
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Login and Signup Buttons */}
      <Box className="button-container">
        <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mr: 2 }}>
          Login
        </Button>
        <Button variant="outlined" color="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </Box>
    </Container>
    </Container>
  );
};

export default DemoPage;
