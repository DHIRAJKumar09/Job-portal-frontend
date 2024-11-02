// JobApplications.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';

const JobApplications = ({ applications }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6">Job Applications</Typography>
      <List>
        {applications.map((application, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={application.title}
              secondary={`Location: ${application.location}`}
            />
            <Chip label={application.status} color="primary" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default JobApplications;
