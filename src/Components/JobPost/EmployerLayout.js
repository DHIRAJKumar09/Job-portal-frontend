// EmployerLayout.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import EmployerSidebar from '../JobPost/EmployerSidebar';
import JobPostForm from './JobPostForm';
import JobList from './JobList';
import { AllApplicants } from '../EmployerComponents/AllApplicants';
import {CompanyProfile} from '../EmployerComponents/CompanyProfile';
import AccountSettings from '../EmployerComponents/AccountSettings';

const EmployerLayout = () => {
    return (
        <Box display="flex" minHeight="100vh" paddingTop="16rem" >
            {/* Sidebar remains fixed on the left */}
            {/* <EmployerSidebar /> */}

            {/* Main content area for displaying selected components */}
            <Box flex={1} padding={3}>
                <Typography variant="h4" gutterBottom>
                    Employer Dashboard
                </Typography>
                
                {/* Define routes to display content based on selected path */}
                <Routes>
                    <Route path="/dashboard" element={<Typography variant="h6">Welcome to the Dashboard</Typography>} />
                    <Route path="/jobs" element={<JobList />} />
                    <Route path="/post-job" element={<JobPostForm />} />
                    <Route path="/applicants" element={<AllApplicants />} />
                    <Route path="/company-profile" element={<CompanyProfile />} />
                    <Route path="/settings/account" element={<AccountSettings />} />
                    
                    {/* Add additional routes for other sidebar options as needed */}
                </Routes>
            </Box>
        </Box>
    );
};

export default EmployerLayout;
