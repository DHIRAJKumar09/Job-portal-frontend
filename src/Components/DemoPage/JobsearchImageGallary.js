import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const jobSearchImages = [
  { id: 1, src: 'image1.jpg', alt: 'Remote Job Opportunities', title: 'Remote Jobs' },
  { id: 2, src: 'image2.jpg', alt: 'Office Spaces', title: 'Office Jobs' },
  { id: 3, src: 'image3.jpg', alt: 'Freelance Work', title: 'Freelance Jobs' },
  { id: 4, src: 'image4.jpg', alt: 'Team Collaboration', title: 'Teamwork' },
  // Add more images as needed
];

const ImageGallery = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f4f6f8' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', mb: 4 }}>
        Explore Job Categories
      </Typography>
      <Grid container spacing={4}>
        {jobSearchImages.map((image) => (
          <Grid item xs={12} sm={6} md={3} key={image.id}>
            <Card sx={{ position: 'relative', boxShadow: 4, overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="200"
                image={image.src}
                alt={image.alt}
                sx={{
                  filter: 'brightness(0.7)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              />
              <CardContent
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
                  {image.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, fontFamily: 'Poppins, sans-serif' }}>
                  Find amazing {image.title.toLowerCase()} here!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGallery;
