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
import { logout } from '../../slices/authSlice';
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
        paddingTop: 5, // Adjust padding for top space
        paddingBottom: 5, // Add some space at the bottom of the page
      }}
    >
      <ApplicationStats />

      {/* Hero Section */}
      <Paper
        sx={{
          backgroundImage: 'url("https://peepingmoon-cdn.sgp1.digitaloceanspaces.com/engpeepingmoon/120724073522-6690dcba6cdb0kanguva-(1).jpg")',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            fontWeight: '900',
            fontSize: '3rem',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        >
          Find Your Dream Job Today!
        </Typography>
      </Paper>

      {/* Job Categories */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Job Categories
        </Typography>
        <Grid container spacing={2}>
          {['IT', 'Healthcare', 'Marketing', 'Finance', 'Design'].map((category) => (
            <Grid item xs={6} sm={4} md={2} key={category}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: '8px',
                  fontWeight: '600',
                  color: '#333',
                  '&:hover': {
                    bgcolor: '#3f51b5',
                    color: 'white',
                  },
                }}
              >
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Featured Jobs */}
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
        Featured Jobs
      </Typography>
      <Grid container spacing={3}>
        {featuredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card
              sx={{
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                alt={job.company}
                height="140"
                image={job.logo}
                sx={{
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {job.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.location}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {job.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size="small" color="primary">
                  Apply
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Testimonials Section */}
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <TestimonialSection />
      </Box>

      {/* Latest Articles Section */}
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
        Latest Articles
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card
              sx={{
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {article.title}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Footer */}
      <Box sx={{ mt: 6 }}>
        <Footer />
      </Box>
    </Container>
  );
};

export default HomePage;
