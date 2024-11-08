<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
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
<<<<<<< HEAD
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
=======
} from "@mui/material";
import ImageGallery from "./JobsearchImageGallary";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
// Custom styles for additional CSS
>>>>>>> 15dada6 (Initial commit after reinitializing repository)

const DemoPage = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
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
=======
  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/register");

  const features = [
    {
      id: 1,
      title: "Job Search",
      description: "Search jobs by skills and location.",
    },
    {
      id: 2,
      title: "Resume Builder",
      description: "Create a professional resume easily.",
    },
    {
      id: 3,
      title: "Job Alerts",
      description: "Receive instant job notifications.",
    },
    {
      id: 4,
      title: "Company Reviews",
      description: "Read honest company reviews.",
    },
  ];

  const premiumBenefits = [
    {
      id: 1,
      title: "Profile Boost",
      description: "Highlight your profile to employers.",
    },
    { id: 2, title: "Priority Support", description: "Get faster responses." },
    {
      id: 3,
      title: "Exclusive Listings",
      description: "Access exclusive job postings.",
    },
    {
      id: 4,
      title: "Interview Coaching",
      description: "Tips for successful interviews.",
    },
  ];

  const companies = [
    {
      id: 1,
      name: "TechCorp",
      location: "San Francisco, CA",
      logo: "https://static.wixstatic.com/media/a63e3e_dca64f0891184cb1b744311e7797f793~mv2.png",
    },
    {
      id: 2,
      name: "Innovate Solutions",
      location: "Austin, TX",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SxasH4gH3poERmje5sYn7SJw7qdfWKewcg&s",
    },
    {
      id: 3,
      name: "HealthPlus",
      location: "New York, NY",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvPgMQ7OFPECZYhHkmRhirLI0v9t5X4KApw&s",
    },
    {
      id: 4,
      name: "Green Energy Inc.",
      location: "Denver, CO",
      logo: "https://img.freepik.com/free-vector/green-alternative-energy-power-logo_126523-2775.jpg",
    },
  ];

  const successStories = [
    {
      id: 1,
      name: "John Alice",
      role: "Software Engineer",
      company: "TechCorp",
      image:
        "https://www.shutterstock.com/image-photo/portrait-beautiful-mid-adult-woman-260nw-1825812638.jpg",
      quote: "Landing my dream job was easier than I imagined!",
    },
    {
      id: 2,
      name: "Jane Walker",
      role: "Data Scientist",
      company: "HealthPlus",
      image:
        "https://cdn.pixabay.com/photo/2024/05/05/19/33/man-8741800_1280.jpg",
      quote: "This portal connected me to amazing opportunities!",
    },
  ];

  return (
    <Container
      maxWidth="lg"
   
      
      sx={{
        paddingTop: { xs: "260rem", sm: "145rem", md: "110rem" }, // Adjust padding for smaller screens
      }}
    >
      {/* Header Section */}
      <Box
        textAlign="center"
        sx={{
          bgcolor: "#3f51b5",
          color: "white",
          py: 6,
          borderRadius: 1,
          fontWeight: "900", // Bold font
          fontSize: "4rem",
          mb: 4,
          boxShadow: 3,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          backdropFilter:"0.8",
          backgroundImage:
            "url()", // Replace with your image URL
          backgroundSize: "cover", // Ensure the image covers the entire box
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{ fontFamily: "Lobster, cursive" }}
        >
          Discover Your Dream Job
        </Typography>
        <Typography
          variant="h6"
          paragraph
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Join our platform to unlock exclusive career opportunities.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSignup}
          sx={{ mr: 2 }}
        >
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
          Sign Up
        </Button>
        <Button variant="outlined" color="inherit" onClick={handleLogin}>
          Login
        </Button>
      </Box>

      {/* Features Section */}
<<<<<<< HEAD
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
=======
      
      <Typography
  variant="h4"
  gutterBottom
  sx={{
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
    color: '#3f51b5',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    position: 'relative',
    pb: 2,
    '&:after': {
      content: '""',
      display: 'block',
      width: '50px',
      height: '4px',
      backgroundColor: '#3f51b5',
      margin: '8px auto 0 auto',
      borderRadius: 2,
    },
    '@media (max-width:600px)': {
      fontSize: '1.8rem',
    },
    '@media (min-width:600px)': {
      fontSize: '2.4rem',
    },
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  }}
>
  Features
</Typography>

      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.id}>
            <Card
              sx={{
                textAlign: "center",
                height: "100%",
                boxShadow: 4,
                borderRadius: 3,
                p: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                background: "linear-gradient(145deg, #f3f4f6 0%, #ffffff 100%)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                {/* Optional Icon at the top */}
                {feature.icon && (
                  <feature.icon
                    sx={{
                      fontSize: 50,
                      color: "#3f51b5",
                      mb: 2,
                    }}
                  />
                )}
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    color: "#3f51b5",
                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{
                    fontSize: "1rem",
                    color: "#666",
                    fontFamily: "Roboto, sans-serif",
                    lineHeight: 1.6,
                  }}
                >
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Premium Benefits Section */}
<<<<<<< HEAD
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
=======
      <Typography
  variant="h4"
  gutterBottom
  sx={{
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
    color: '#3f51b5',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    position: 'relative',
    pb: 2,
    '&:after': {
      content: '""',
      display: 'block',
      width: '50px',
      height: '4px',
      backgroundColor: '#3f51b5',
      margin: '8px auto 0 auto',
      borderRadius: 2,
    },
    '@media (max-width:600px)': {
      fontSize: '1.8rem',
    },
    '@media (min-width:600px)': {
      fontSize: '2.4rem',
    },
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  }}
>
  Premium Benefits
</Typography>

      <Grid container spacing={4}>
        {premiumBenefits.map((benefit) => (
          <Grid item xs={12} sm={6} md={3} key={benefit.id}>
            <Card
              sx={{
                textAlign: "center",
                height: "100%",
                boxShadow: 5,
                borderRadius: 2,
                bgcolor: "background.paper", // Background color
                background: "linear-gradient(135deg, #e0f7fa 0%, #e1bee7 100%)", // Subtle gradient
                p: 3, // Padding
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s ease", // Smooth scale on hover
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 8,
                },
              }}
            >
              <CardContent>
                {/* Icon placeholder */}
                {benefit.icon && (
                  <benefit.icon
                    style={{
                      fontSize: 48,
                      color: "#3f51b5",
                      marginBottom: "1rem",
                    }}
                  />
                )}
                <Typography
                  variant="h5"
                  color="primary"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: "#3f51b5", // Primary color for title
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Roboto, sans-serif",
                    color: "#555",
                  }}
                >
                  {benefit.description}
                </Typography>
              </CardContent>
              {/* Optional Button */}
              {benefit.cta && (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    marginTop: 2,
                    fontWeight: "bold",
                    padding: "8px 16px",
                    borderRadius: "20px",
                  }}
                >
                  {benefit.cta}
                </Button>
              )}
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
            </Card>
          </Grid>
        ))}
      </Grid>
<<<<<<< HEAD

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
=======
      {/* Success Stories Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mt: 6, textAlign: "center" }}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Success Stories
      </Typography>
      <Carousel indicators={false} autoPlay>
  {successStories.map((story) => (
    <Card
      key={story.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 4,
        boxShadow: 6,
        borderRadius: 3,
        maxWidth: 400,
        mx: 'auto',
        background: 'linear-gradient(145deg, #f5f7fa, #e8eaf6)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Avatar
        src={story.image}
        alt={story.name}
        sx={{
          width: 100,
          height: 100,
          mb: 2,
          border: '4px solid #3f51b5',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Lobster, cursive',
          color: '#3f51b5',
          textAlign: 'center',
          fontSize: '1.5rem',
          mb: 1,
        }}
      >
        {story.name}
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          mb: 2,
          textAlign: 'center',
          fontSize: '1rem',
        }}
      >
        {story.role} at {story.company}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontStyle: 'italic',
          fontFamily: 'Poppins, sans-serif',
          textAlign: 'center',
          fontSize: '1rem',
          color: '#555',
          px: 2,
          lineHeight: 1.6,
          '&:before': {
            content: '"“"',
            fontSize: '2rem',
            color: '#3f51b5',
            mr: 1,
          },
          '&:after': {
            content: '"”"',
            fontSize: '2rem',
            color: '#3f51b5',
            ml: 1,
          },
        }}
      >
        {story.quote}
      </Typography>
    </Card>
  ))}
</Carousel>


      {/* Companies Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mt: 6, textAlign: "center" }}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Featured Companies
      </Typography>
      <Grid container spacing={4}>
  {companies.map((company) => (
    <Grid item xs={12} sm={6} md={3} key={company.id}>
      <Card
        sx={{
          textAlign: "center",
          height: "100%",
          boxShadow: 4,
          borderRadius: 3,
          p: 2,
          background: "linear-gradient(145deg, #f8f9fa, #e3e5e8)",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 6,
          },
        }}
      >
        <CardContent>
          <Avatar
            src={company.logo}
            alt={company.name}
            sx={{
              width: 70,
              height: 70,
              bgcolor: "primary.main",
              mb: 2,
              boxShadow: 3,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              color: "#3f51b5",
              mb: 1,
            }}
          >
            {company.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.875rem",
            }}
          >
            {company.location}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{
              borderRadius: 3,
              textTransform: "none",
              boxShadow: 2,
              fontFamily: "Poppins, sans-serif",
              "&:hover": {
                backgroundColor: "#334296",
              },
            }}
            onClick={() => navigate(`/companies/${company.id}`)}
          >
            View Jobs
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>

>>>>>>> 15dada6 (Initial commit after reinitializing repository)
    </Container>
  );
};

export default DemoPage;
