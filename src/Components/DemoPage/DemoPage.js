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

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
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

import video1 from "../../assets/Hello.mp4";
import video2 from "../../assets/video Mobile Video.mp4";
import workimg1 from "../../assets/workimg.png";

const topics = [
  {
    name: "Java",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240304115115/Java_Exercise_Poster-(1).webp",
    description:
      "Master OOP concepts, collections, and multithreading. Get ready for enterprise-level challenges.",
  },
  {
    name: "Python",
    image:
      "https://images.unsplash.com/photo-1667372531881-6f975b1c86db?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Ace Python interviews with a focus on data structures, machine learning, and web development.",
  },
  {
    name: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Deep dive into ES6+ features, async programming, and front-end frameworks.",
  },
  {
    name: "C++",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800",
    description:
      "Excel in competitive programming and understand STL, memory management, and algorithms.",
  },
  {
    name: "Mock Interviews",
    image:
      "https://cdn.pixabay.com/photo/2017/10/28/18/02/cartoon-2897720_1280.png",
    description:
      "Simulate real-world coding interviews with tailored questions for all experience levels.",
  },
];
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
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleSignin = (e) => {
    e.preventDefault();
    navigate("/register");
  };
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

          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          py: 3,
          gap: 3,
          // borderRight: "1px solid #ddd",
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
            <Login />
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
          marginTop: "20px",
          px: 3,
          paddingTop: "14px",

          borderRadius: "20px",
          // paddingTop: { xs: "0rem", sm: "2rem", md: "20rem", lg: "36rem" },
          overflowY: "auto",
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            padding: "150px",

            borderRadius: "10px",
            border: "2px solid white",
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
              {/* Find Your Dream Job Now */}
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{
                mb: 4,
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              {/* Join our platform to unlock exclusive career opportunities. */}
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
        <Box
          sx={{
            py: 10,
            px: { xs: 2, md: 10 },
         
            
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {/* Section Heading */}
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 4,
              fontWeight: "bold",
              fontFamily: "'Poppins', sans-serif",
              color: "#333",
            }}
          >
            Ace Your Interviews with Confidence
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              mb: 6,
              maxWidth: "800px",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#555",
              fontFamily: "'Lora', serif",
            }}
          >
            Step into your interviews prepared and confident. Learn from
            expert-guided mock interviews, watch insightful videos, and explore
            interactive content designed to sharpen your skills and maximize
            your chances of success.
          </Typography>

          {/* Content Grid */}
          <Grid
            container
            spacing={4}
            sx={{
              alignItems: "center",
            }}
          >
            {/* Video Section */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  height: "60vh",
                  border: "2px solid white",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    startIcon={<PlayCircleOutlineIcon />}
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: "18px",
                      textTransform: "capitalize",
                      padding: "10px 20px",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Watch Full Guide
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Text and Features Section */}
            <Grid item xs={12} md={5}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "#333",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                What We Offer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: 1.6,
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                Our platform provides you with the tools and resources to excel
                in any technical or HR interview:
              </Typography>
              <ul
                style={{
                  paddingLeft: "20px",
                  color: "#555",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                <li style={{ marginBottom: "10px" }}>
                  <Typography variant="body1">
                    Mock interviews tailored to your programming language and
                    expertise.
                  </Typography>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Typography variant="body1">
                    Access to expert advice and proven strategies for interview
                    success.
                  </Typography>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Typography variant="body1">
                    Real-world interview simulations with instant feedback.
                  </Typography>
                </li>
              </ul>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: 3,
                  textTransform: "capitalize",
                  fontSize: "16px",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Start Your Journey
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            padding: "20px",

            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              marginBottom: "30px",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Unlock Your Potential with Mock Interviews
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              color: "#555",
              textAlign: "center",
              marginBottom: "40px",
              maxWidth: "800px",
              margin: "0 auto",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Whether you're preparing for a technical interview or sharpening
            your programming skills, our tailored mock interviews and resources
            for different programming languages will help you succeed.
          </Typography>

          <Grid container spacing={4}>
            {topics.map((topic, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    height: "100%",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image={topic.image}
                    alt={`${topic.name} image`}
                    sx={{
                      filter: "brightness(0.4)",
                      position: "relative",
                      backgroundSize: "cover",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "white",
                        fontFamily: "'Nunito', sans-serif",
                      }}
                    >
                      {topic.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "8px",
                        color: "white",
                        margin: "10px 0",
                      }}
                    >
                      {topic.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginTop: "10px",
                        textTransform: "capitalize",
                        borderRadius: "20px",
                        fontFamily: "'Nunito', sans-serif",
                      }}
                    >
                      {topic.name === "Mock Interviews"
                        ? "Start Now"
                        : `Learn ${topic.name}`}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default YourApp;
