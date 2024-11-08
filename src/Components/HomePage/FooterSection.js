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
<<<<<<< HEAD
        backgroundColor: '',
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
=======
        
        backdropFilter: 'blur(10px)',
        color: 'black',
        fontWeight: 600,
        py: 6,
        mt: 6,
        boxShadow: '0 -4px 8px rgba(0,0,0,0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Job Portal Info Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif' }}>
              Job Portal
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Roboto, sans-serif',
                lineHeight: 1.7,
                opacity: 0.9,
                color: '#f0f0f0',
                mb: 2,
              }}
            >
              Your one-stop solution for finding your dream job and posting job openings.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, fontFamily: 'Poppins, sans-serif' }}
            >
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
              Post a Job
            </Button>
          </Grid>

<<<<<<< HEAD
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
=======
          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0, lineHeight: 1.8 }}>
              {['Home', 'Jobs', 'About Us', 'Contact Us', 'Privacy Policy'].map((text, index) => (
                <li key={index}>
                  <Link
                    href={`/${text.toLowerCase().replace(/\s/g, '')}`}
                    color="inherit"
                    underline="hover"
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      color: '#f0f0f0',
                      '&:hover': { color: '#cfe0ff' },
                    }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif' }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              {[
                { href: 'https://facebook.com', icon: <FacebookIcon /> },
                { href: 'https://twitter.com', icon: <TwitterIcon /> },
                { href: 'https://linkedin.com', icon: <LinkedInIcon /> },
                { href: 'https://instagram.com', icon: <InstagramIcon /> },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  color="inherit"
                  href={social.href}
                  target="_blank"
                  sx={{
                    color: '#f0f0f0',
                    '&:hover': { color: '#cfe0ff' },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
            </Box>
          </Grid>
        </Grid>

<<<<<<< HEAD
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
=======
        {/* Copyright Section */}
        <Box sx={{ textAlign: 'center', mt: 4, pt: 2, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="body2" sx={{ color: '#e0e0e0', fontFamily: 'Roboto, sans-serif' }}>
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
            © {new Date().getFullYear()} Job Portal. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
