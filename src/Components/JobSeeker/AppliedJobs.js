// AppliedJobs.js
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const response = await axios.get('https://job-backend-portal.onrender.com/api/applications/applied-job', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setAppliedJobs(response.data);
            } catch (error) {
                console.error('Error fetching applied jobs:', error);
                setError('Failed to load applied jobs.');
            } finally {
                setLoading(false);
            }
        };

        fetchAppliedJobs();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box textAlign="center" mt={5}>
                <Typography variant="h6" color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box px={{ xs: 2, sm: 3, md: 5 }} py={15} sx={{paddingTop:{xs:'70rem',sm:'60rem',md:'45rem'}}}>
            <Typography variant="h4" align="center" gutterBottom>
                Applied Jobs
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {appliedJobs.length === 0 ? (
                    <Typography variant="h6" align="center" sx={{ width: '100%', mt: 3 }}>
                        You have not applied for any jobs yet.
                    </Typography>
                ) : (
                    appliedJobs.map((job, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: 250,
                                transition: 'transform 0.3s ease',
                                ':hover': {
                                    transform: 'scale(1.02)',
                                },
                            }}>
                                <CardContent>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        {job.job.title}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Company: {job.job.company}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Location: {job.job.location}
                                    </Typography>
                                    <Typography color="textSecondary" sx={{ mt: 2, fontWeight: 'bold',color:'green' }}>
                                        Status: {job.status}
                                    </Typography>
                                    <Typography color="textSecondary" sx={{ mt: 1, fontSize: 14 }}>
                                        Applied on: {new Date(job.appliedDate).toLocaleDateString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    );
};

export default AppliedJobs;
