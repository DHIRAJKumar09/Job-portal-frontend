import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DemoPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate('/login');
  const handleSignup = () => navigate('/register');

  const features = [
    { id: 1, title: 'Job Search', description: 'Search for jobs by skills and preferences.' },
    { id: 2, title: 'Resume Builder', description: 'Create a professional resume easily.' },
    { id: 3, title: 'Job Alerts', description: 'Get notifications for relevant job postings.' },
    { id: 4, title: 'Company Reviews', description: 'Read reviews before applying.' },
  ];

  const premiumBenefits = [
    { id: 1, title: 'Profile Boost', description: 'Highlight your profile to employers.' },
    { id: 2, title: 'Priority Support', description: 'Get faster responses to your queries.' },
    { id: 3, title: 'Exclusive Listings', description: 'Access exclusive job postings.' },
    { id: 4, title: 'Interview Coaching', description: 'Receive tips for successful interviews.' },
  ];

  const companies = [
    { id: 1, name: 'TechCorp', location: 'San Francisco, CA' },
    { id: 2, name: 'Innovate Solutions', location: 'Austin, TX' },
    { id: 3, name: 'HealthPlus', location: 'New York, NY' },
    { id: 4, name: 'Green Energy Inc.', location: 'Denver, CO' },
  ];

  return (
    <Container maxWidth="lg" sx={{
      paddingTop: { xs: '160rem', sm: '35rem', md: '40rem' }, // Adjust padding for smaller screens
    }} >
      {/* Header Section */}
      <Box textAlign="center" sx={{ bgcolor: '#3f51b5', color: 'white', py: 6, borderRadius: 1, mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Job Portal
        </Typography>
        <Typography variant="h6" paragraph>
          Discover your dream job. Sign up to access premium features!
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleSignup} sx={{ mr: 2 }}>
          Sign Up
        </Button>
        <Button variant="outlined" color="inherit" onClick={handleLogin}>
          Login
        </Button>
      </Box>

      {/* Features Section */}
      <Typography variant="h4" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{feature.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Premium Benefits Section */}
      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        Premium Member Benefits
      </Typography>
      <Grid container spacing={4}>
        {premiumBenefits.map((benefit) => (
          <Grid item xs={12} sm={6} md={3} key={benefit.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{benefit.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Companies Section */}
      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        Featured Companies
      </Typography>
      <Grid container spacing={4}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={3} key={company.id}>
            <Card>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main', mb: 2 }}>
                  {company.name.charAt(0)}
                </Avatar>
                <Typography variant="h6">{company.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {company.location}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => navigate(`/companies/${company.id}`)}>
                  View Jobs
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DemoPage;
