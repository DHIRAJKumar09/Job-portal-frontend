import React from 'react';
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from '@mui/material';
import {logout} from '../../slices/authSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TestimonialSection from './TestimonialSection';
import Footer from './FooterSection';
import JobApplicationStats from '../JobSeeker/JobApplicationsStats';
import ApplicationStatsChart from '../JobSeeker/ApplicationStatsCharts';
import ApplicationStats from '../JobSeeker/ApplicationStatsCharts';

// Sample job data
const featuredJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Solutions',
    location: 'New York, NY',
    description: 'Looking for a skilled software engineer.',
    logo: 'https://pitcs.in/wp-content/uploads/2022/08/Software-Engineer-Software-Development-MATLAB-.png',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovate Inc.',
    location: 'San Francisco, CA',
    description: 'Seeking an experienced product manager.',
    logo: 'https://pitcs.in/wp-content/uploads/2022/08/Software-Engineer-Software-Development-Classical-AUTOSAR.png',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'Creative Designs',
    location: 'Remote',
    description: 'Join our team as a UX/UI designer.',
    logo: 'https://media.licdn.com/dms/image/D4E12AQGjys4n3jGClg/article-cover_image-shrink_720_1280/0/1707236824937?e=2147483647&v=beta&t=Zyd-7md9Mmf__tiT4eb7UMAHsrz_EJhLuSCGfkNLuns',
  },
];

// Sample article data
const articles = [
  { id: 1, title: 'How to Ace Your Next Interview' },
  { id: 2, title: 'Top Skills Employers Are Looking For' },
  { id: 3, title: 'Building a ATS Friendly Resume' },
];

const HomePage = () => {

  return (
    <Container
      maxWidth="lg"
      
      sx={{
        paddingTop: { xs: '240rem', sm: '160rem', md: '80rem' }, // Adjust padding for smaller screens
      }}
    >
         <ApplicationStats/>
      {/* Hero Section */}
      <Paper
        sx={{
          backgroundImage: 'url("https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/120724073522-6690dcba6cdb0kanguva-(1).jpg")',
          position: 'relative', // Important for overlay
         // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: 'Poppins, sans-serif', // Set font
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow effect
            fontWeight: '900', // Bold font
            fontSize:'4rem',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with opacity
            zIndex: 1, // Ensures the overlay is behind the text
          }}
          >
          Find Your Dream Job Today!
        </Typography>
      </Paper>


      {/* <JobApplicationStats/> */}

      {/* Search Bar and Post a Job Button */}
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Stack items vertically on small screens
          alignItems: 'center',
          mb: 4,
        }}
      >
        <TextField
          label="Search for jobs"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }} // Adjust margins for small screens
        />
        <Button variant="contained" color="white">
          Search
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ marginLeft: { sm: 2 }, marginTop: { xs: 2, sm: 0 } }} // Adjust for small screens
        >
          Post a Job
        </Button>
      </Box>

      Job Categories */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Job Categories
        </Typography>
        <Grid container spacing={2}>
          {['IT', 'Healthcare', 'Marketing', 'Finance', 'Design'].map(
            (category) => (
              <Grid item xs={6} sm={4} md={2} key={category}>
                <Button variant="outlined" fullWidth>
                  {category}
                </Button>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    
 
     
     

      {/* Featured Jobs */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Featured Jobs
      </Typography>
      <Grid container spacing={3}>
        {featuredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card>
              <CardMedia
                component="img"
                alt={job.company}
                height="140"
                image={job.logo}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {job.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Apply
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Testimonials Section */}
      <Box sx={{ textAlign: 'center' }}>
        <TestimonialSection/>
      </Box>

      {/* Latest Articles Section */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Latest Articles
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{article.title}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Newsletter Subscription Section */}
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', padding: '10px 0' ,width:'100%' }}>
       
        <Box>
           <Footer/>
        </Box>
      </Box>
      

  
    </Container>
  );
};

export default HomePage;
