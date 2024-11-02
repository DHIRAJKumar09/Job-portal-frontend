import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import JobList from './JobList'; // Component to list jobs
import { AllApplicants } from '../EmployerComponents/AllApplicants';
; // Component to manage applications

const EmployerPage = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Employer Dashboard
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">My Jobs</Typography>
                    <JobList /> {/* List of jobs with edit/delete options */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">Applications</Typography>
                    <AllApplicants/> {/* List of applications for selected job */}
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Post a New Job
            </Button>
        </Box>
    );
};

export default EmployerPage;
