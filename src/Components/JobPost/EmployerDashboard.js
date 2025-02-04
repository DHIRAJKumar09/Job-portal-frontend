import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, IconButton } from '@mui/material';
import JobList from './JobList'; // Component to list jobs
import { AllApplicants } from '../EmployerComponents/AllApplicants'; // Component to manage applications
import { Add, Delete, Edit } from '@mui/icons-material';
import NotificationBell from './NotificationBell'; // Component for notifications

const EmployerPage = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 3, borderRadius: '8px', boxShadow: 3 }}>
        <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
          Employer Dashboard
        </Typography>
        <NotificationBell /> {/* Bell icon for notifications */}
      </Box>

      {/* Overview Section */}
      <Box sx={{ marginTop: 4, marginBottom: 6, backgroundColor: '#fff', padding: 3, borderRadius: '8px', boxShadow: 3 }}>
        <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
          Welcome back, Employer! Here's an overview of your activity:
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: 3, textAlign: 'center', backgroundColor: '#007bff', color: '#fff', borderRadius: '8px', boxShadow: 2 }}>
              <Typography variant="h6">Jobs Posted</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>5</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: 3, textAlign: 'center', backgroundColor: '#28a745', color: '#fff', borderRadius: '8px', boxShadow: 2 }}>
              <Typography variant="h6">Applications Received</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>12</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: 3, textAlign: 'center', backgroundColor: '#ffc107', color: '#fff', borderRadius: '8px', boxShadow: 2 }}>
              <Typography variant="h6">Pending Actions</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>3</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Main Dashboard Content */}
      <Grid container spacing={4}>
        {/* Job Listings Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
            My Jobs
          </Typography>
          <Card sx={{ padding: 3, backgroundColor: '#fff', borderRadius: '8px', boxShadow: 2 }}>
            <JobList /> {/* List of jobs with edit/delete options */}
          </Card>
        </Grid>

        {/* Applications Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
            Applications
          </Typography>
          <Card sx={{ padding: 3, backgroundColor: '#fff', borderRadius: '8px', boxShadow: 2 }}>
            <AllApplicants /> {/* List of applications for selected job */}
          </Card>
        </Grid>
      </Grid>

      {/* Post a New Job Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '12px 24px', 
            borderRadius: '30px', 
            fontWeight: 'bold', 
            boxShadow: 3,
            '&:hover': { backgroundColor: '#0056b3' },
          }}
          startIcon={<Add />}
        >
          Post a New Job
        </Button>
      </Box>
    </Box>
  );
};

export default EmployerPage;
