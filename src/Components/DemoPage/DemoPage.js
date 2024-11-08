import React from "react";
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
} from "@mui/material";
import ImageGallery from "./JobsearchImageGallary"; // Import ImageGallery here
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";

const DemoPage = () => {
  const navigate = useNavigate();

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
        paddingTop: { xs: "260rem", sm: "145rem", md: "60rem" }, // Adjust padding for smaller screens
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
          Sign Up
        </Button>
        <Button variant="outlined" color="inherit" onClick={handleLogin}>
          Login
        </Button>
      </Box>

      {/* Features Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
          color: "#3f51b5",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 1.5,
          position: "relative",
          pb: 2,
          "&:after": {
            content: '""',
            display: "block",
            width: "50px",
            height: "4px",
            backgroundColor: "#3f51b5",
            margin: "8px auto 0 auto",
            borderRadius: 2,
          },
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
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add the ImageGallery Component Here */}
       {/* This is where the job search gallery will appear */}

      {/* Premium Benefits Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
          color: "#3f51b5",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 1.5,
          position: "relative",
          pb: 2,
          "&:after": {
            content: '""',
            display: "block",
            width: "50px",
            height: "4px",
            backgroundColor: "#3f51b5",
            margin: "8px auto 0 auto",
            borderRadius: 2,
          },
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
                  {benefit.title}
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
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </Container>
  );
};

export default DemoPage;
