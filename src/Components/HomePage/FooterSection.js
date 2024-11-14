import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Link,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#3f51b5",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        backdropFilter:'blur(10px)',
        color: 'white',
        fontWeight:'600',
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Job Portal
            </Typography>
            <Typography variant="body2" gutterBottom>
              Your one-stop solution for finding your dream job and posting your job openings.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 1 }}>
              Post a Job
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link href="/" color="inherit" underline="hover">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/jobs" color="inherit" underline="hover">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/about" color="inherit" underline="hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit" underline="hover">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" color="inherit" underline="hover">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 1 }}>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Job Portal. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
