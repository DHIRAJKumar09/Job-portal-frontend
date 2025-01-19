import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import {
  Home,
  Folder,
  ViewModule,
  Star,
  Apps,
  HelpOutline,
  Login,
  PersonAdd,
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

import { useNavigate } from "react-router-dom";

import video1 from '../../assets/Hello.mp4'
import video2 from "../../assets/video Mobile Video.mp4";
import workimg1 from "../../assets/workimg.png";

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

const YourApp = () => {
  const navigate = useNavigate();
  const handleLogin =(e)=>{
    e.preventDefault();
    navigate("/login");
  }
  const handleSignin =(e)=>{
    e.preventDefault();
    navigate("/register");
  }
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        
      
        background: "linear-gradient(to bottom, #74ebd5, #acb6e5)",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "80px",
          backgroundColor: "#f5f6fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 3,
          gap: 3,
          borderRight: "1px solid #ddd",
        }}
      >
        {/* Sidebar Icons */}
        {/* <IconButton>
          <Home />
        </IconButton>
        <IconButton>
          <Folder />
        </IconButton>
        <IconButton>
          <ViewModule />
        </IconButton>
        <IconButton>
          <Star />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <HelpOutline />
        </IconButton> */}

        {/* Login and Signup Icons */}
        <Box
          sx={{
            marginTop: "auto", // Push to the bottom of the sidebar
          }}
        >
          <IconButton onClick={handleLogin}>
            <Login/>
          </IconButton>
          <IconButton onClick={handleSignin}>
            <PersonAdd />
          </IconButton>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          // marginTop:"40px",
          px: 3,
          // paddingTop: { xs: "0rem", sm: "2rem", md: "20rem", lg: "36rem" },
          overflowY: "auto",
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            marginTop:"140rem",
            mb: 5,
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
              zIndex: 1,
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
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: "bold",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              }}
            >
              Find Your Dream Job Now
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{
                mb: 4,
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              Join our platform to unlock exclusive career opportunities.
            </Typography>
          </Box>
        </Box>

        {/* Explore Categories */}
        <Box sx={{ py: 5, px: 3, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ mb: 3, fontFamily: "'Nunito', sans-serif" }}
          >
            Explore Categories
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              px: 2,
            }}
          >
            {categories.map((category, index) => (
              <Card
                key={index}
                sx={{
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 1,
                }}
              >
                <Box sx={{ color: "#3f51b5", fontSize: "20px", mb: 1 }}>
                  {category.icon}
                </Box>
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

        {/* Main Content Section */}
        <Box sx={{ py: 10, px: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <video
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: 4,
                }}
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid>
            <Grid item xs={4}>
              <img
                src={workimg1}
                width="100%"
                height="500px"
                style={{ objectFit: "cover", borderRadius: 4 }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default YourApp;
