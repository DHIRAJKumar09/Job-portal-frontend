import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For additional animation effects

const DemoPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/register");

  const features = [
    { id: 1, title: "Job Search", description: "Search jobs by skills and location." },
    { id: 2, title: "Resume Builder", description: "Create a professional resume easily." },
    { id: 3, title: "Job Alerts", description: "Receive instant job notifications." },
    { id: 4, title: "Company Reviews", description: "Read honest company reviews." },
  ];

  const premiumBenefits = [
    { id: 1, title: "Profile Boost", description: "Highlight your profile to employers." },
    { id: 2, title: "Priority Support", description: "Get faster responses." },
    { id: 3, title: "Exclusive Listings", description: "Access exclusive job postings." },
    { id: 4, title: "Interview Coaching", description: "Tips for successful interviews." },
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

  return (
    <Container maxWidth="lg" sx={{ paddingTop: { xs: "120px", sm: "80px", md: "1160px" } }}>
      {/* Header Section */}
      <Box
        textAlign="center"
        sx={{
          bgcolor: "#3f51b5",
          color: "white",
          py: 6,
          borderRadius: 1,
          fontWeight: "900",
          fontSize: "4rem",
          mb: 4,
          boxShadow: 3,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography variant="h3" gutterBottom style={{ fontFamily: "Lobster, cursive" }}>
          Discover Your Dream Job
        </Typography>
        <Typography variant="h6" paragraph style={{ fontFamily: "Poppins, sans-serif" }}>
          Join our platform to unlock exclusive career opportunities.
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleSignup} sx={{ mr: 2 }}>
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
          <Grid item xs={12} sm={6} md={3} key={feature.id} sx={{ display: "flex" }}>
            <motion.div whileHover={{ scale: 1.05 }} style={{ width: "100%" }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%", // Ensures cards take up equal height
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
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" color="primary" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ fontSize: "1rem", color: "#666", fontFamily: "Roboto, sans-serif", lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Companies Hiring Section */}
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
        Companies Hiring
      </Typography>
      <Grid container spacing={4}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={3} key={company.id} sx={{ display: "flex" }}>
            <motion.div whileHover={{ scale: 1.05 }} style={{ width: "100%" }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%", // Ensures cards take up equal height
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
                <CardContent sx={{ flexGrow: 1 }}>
                  <Avatar
                    src={company.logo}
                    alt={company.name}
                    sx={{ width: 80, height: 80, borderRadius: "50%", mb: 2, boxShadow: 2 }}
                  />
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                    {company.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ color: "#666" }}>
                    {company.location}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DemoPage;
