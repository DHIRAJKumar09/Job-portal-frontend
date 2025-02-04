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
        bgcolor: "white", // White background for a clean, modern look
        color: '#333', // Dark text color for better contrast
        fontFamily: "'Roboto', sans-serif", // Main font for text
        py: 3, // Reduced padding for compact height
        mt: 4,
        borderTop: '2px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* First Grid: Job Portal */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontFamily: "'Poppins', sans-serif", // Custom font for headings
                color: '#1E3A8A',
                mb: 2,
              }}
              gutterBottom
            >
              Job Portal
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Find your dream job or post job openings with ease. Join us today and start your career journey.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 1,
                bgcolor: '#1E3A8A',
                '&:hover': { bgcolor: '#FF7043' }, // Hover effect to coral
                borderRadius: '8px',
                fontWeight: '600',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
              }}
            >
              Post a Job
            </Button>
          </Grid>

          {/* Second Grid: Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontFamily: "'Poppins', sans-serif",
                color: '#1E3A8A',
                mb: 2,
              }}
              gutterBottom
            >
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link href="/" color="inherit" underline="hover" sx={{ '&:hover': { color: '#FF7043' } }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/jobs" color="inherit" underline="hover" sx={{ '&:hover': { color: '#FF7043' } }}>
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/about" color="inherit" underline="hover" sx={{ '&:hover': { color: '#FF7043' } }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit" underline="hover" sx={{ '&:hover': { color: '#FF7043' } }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" color="inherit" underline="hover" sx={{ '&:hover': { color: '#FF7043' } }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Third Grid: Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontFamily: "'Poppins', sans-serif",
                color: '#1E3A8A',
                mb: 2,
              }}
              gutterBottom
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: 5 }}>📞</span>+1 234 567 890
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: 5 }}>📧</span>support@jobportal.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
              <IconButton
                color="inherit"
                href="https://facebook.com"
                target="_blank"
                sx={{
                  '&:hover': { bgcolor: '#3b5998' },
                  transition: 'background-color 0.3s ease',
                  p: 1,
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
                sx={{
                  '&:hover': { bgcolor: '#00acee' },
                  transition: 'background-color 0.3s ease',
                  p: 1,
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://linkedin.com"
                target="_blank"
                sx={{
                  '&:hover': { bgcolor: '#0e76a8' },
                  transition: 'background-color 0.3s ease',
                  p: 1,
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
                sx={{
                  '&:hover': { bgcolor: '#e4405f' },
                  transition: 'background-color 0.3s ease',
                  p: 1,
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Text */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" sx={{ color: '#333' }}>
            © {new Date().getFullYear()} Job Portal. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
