import React from 'react';
import { Box, List, ListItem, ListItemText, Typography, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const EmployerSidebar = () => {
    const location = useLocation();

    const isSelected = (path) => location.pathname === path;

    return (
        <Box width="240px" bgcolor="#1976d2" color="white" left="0"  padding={2}>
            <Typography variant="h6" gutterBottom>
                Employer Dashboard
            </Typography>
            <List>
                <ListItem button component={Link} to="/employer/dashboard" selected={isSelected('/employer/dashboard')}>
                    <ListItemText primary="Dashboard Overview" />
                </ListItem>
                <Divider light />

                <Typography variant="subtitle1" color="white" paddingTop={1}>
                    Job Posts
                </Typography>
                <ListItem button component={Link} to="/employer/jobs" selected={isSelected('/employer/jobs')}>
                    <ListItemText primary="My Job Posts" />
                </ListItem>
                <ListItem button component={Link} to="/employer/post-job" selected={isSelected('/employer/post-job')}>
                    <ListItemText primary="Create New Job Post" />
                </ListItem>
                <Divider light />

                <Typography variant="subtitle1" color="white" paddingTop={1}>
                    Applicants
                </Typography>
                <ListItem button component={Link} to="/employer/applicants" selected={isSelected('/employer/applicants')}>
                    <ListItemText primary="All Applicants" />
                </ListItem>

                <Divider light />

                <ListItem button component={Link} to="/employer/company-profile" selected={isSelected('/employer/company-profile')}>
                    <ListItemText primary="Company Profile" />
                </ListItem>

                <Divider light />

                <Typography variant="subtitle1" color="white" paddingTop={1}>
                    Settings
                </Typography>
                <ListItem button component={Link} to="/employer/settings/account" selected={isSelected('/employer/settings/account')}>
                    <ListItemText primary="Account Settings" />
                </ListItem>
            </List>
        </Box>
    );
};

export default EmployerSidebar;
