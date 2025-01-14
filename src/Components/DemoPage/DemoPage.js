import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import video1 from "../../assets/Hello.mp4";
import video2 from "../../assets/video Mobile Video.mp4";
import { Home } from "@mui/icons-material";
import {
  WorkOutline,
  Business,
  Campaign,
  RocketLaunch,
  School,
  BarChart,
  EmojiObjects,
  Code,
  StarOutline,
  Engineering,
  Assessment,
} from "@mui/icons-material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const categories = [
  { icon: <WorkOutline fontSize="small" />, title: "Remote" },
  { icon: <Business fontSize="small" />, title: "MNC" },
  { icon: <Campaign fontSize="small" />, title: "Marketing" },
  { icon: <RocketLaunch fontSize="small" />, title: "Startup" },
  { icon: <School fontSize="small" />, title: "Fresher" },
  { icon: <BarChart fontSize="small" />, title: "Analytics" },
  { icon: <EmojiObjects fontSize="small" />, title: "Internship" },
  { icon: <Code fontSize="small" />, title: "Software & IT" },
  { icon: <StarOutline fontSize="small" />, title: "Fortune 500" },
  { icon: <Engineering fontSize="small" />, title: "Engineering" },
  { icon: <Assessment fontSize="small" />, title: "Project Mgmt" },
];

const DemoPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/register");

  return (
    <Container
      maxWidth="lg"
      sx={{ paddingTop: { xs: "96rem", md: "80rem" } }}
      disableGutters
    >
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh", // Fullscreen height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            zIndex: 2,
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
            fontFamily: "'Nunito', sans-serif", // Apply Nunito font here
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
            Find your dream job now 5 lakh+ jobs for you to explore
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, fontSize: "1.2rem" }}>
            Join our platform to unlock exclusive career opportunities.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSignup}
            sx={{ mr: 2, fontFamily: "'Roboto', sans-serif" }}
          >
            Sign Up
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleLogin}
            sx={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Login
          </Button>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ py: 5, px: 3 }}>
        <Paper
          elevation={3}
          sx={{ mb: 4, padding: 3, fontFamily: "'Nunito', sans-serif" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <video
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: 4,
                }}
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Welcome to the Premium Section
              </Typography>
              <Typography variant="body1">
                Explore exclusive features by upgrading your account.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Additional Sections */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 3,
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Why Choose Us?
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: "Job Search", image: "https://cdn.pixabay.com/photo/2020/02/07/14/22/dream-4827288_1280.jpg" },
            {
              title: "Resume Builder",
              image: "https://media.geeksforgeeks.org/wp-content/uploads/20220526181637/ResumeBuildingResourcesandTips.png",
            },
            { title: "Job Alerts", image: "https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg" },
            {
              title: "Company Reviews",
              image: "https://cdn.pixabay.com/photo/2018/09/14/14/31/feedback-3677258_1280.jpg",
            },
          ].map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Image at the Top */}
                <Box
                  sx={{
                    height: "250px", // Adjust height as needed
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position:'relative',
                    borderRadius: "4px 4px 0 0", // Rounded top corners
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: "center",
                    fontFamily: "'Nunito', sans-serif",
                    position:"absolute",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Learn more about ${feature.title.toLowerCase()}.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ py: 5, px: 3, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, fontFamily: "'Nunito', sans-serif" }}
        >
          Explore Categories
        </Typography>
        {/* Horizontal Scrollable Container */}
        <Box
          sx={{
            display: "flex", // Flex layout for horizontal alignment
            flexWrap: "wrap",
            overflowX: "auto", // Enable horizontal scrolling
            gap: 2, // Add space between items
            padding: 2, // Add padding for aesthetics
            "&::-webkit-scrollbar": {
              height: "6px", // Customize scrollbar height
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888", // Scrollbar thumb color
              borderRadius: "4px",
            },
          }}
        >
          {categories.map((category, index) => (
            <Card
              key={index}
              elevation={1}
              sx={{
                width: "100px", // Fixed width
                height: "80px", // Fixed height
                display: "flex", // Flex layout for content alignment
                flexWrap: "wrap",
                flexDirection: "column", // Align icon and text vertically
                alignItems: "center", // Center items horizontally
                justifyContent: "center", // Center items vertically
                textAlign: "center", // Center text alignment
                padding: 1, // Inner padding
                overflow: "hidden", // Ensure consistent sizing
              }}
            >
              {/* Icon */}
              <Box sx={{ color: "#3f51b5", fontSize: "20px", mb: 1 }}>
                {category.icon}
              </Box>
              {/* Text */}
              <Typography
                variant="caption"
                sx={{ fontSize: "10px", fontWeight: "bold" }}
              >
                {category.title}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default DemoPage;
