import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import { fetchJobs } from '../../slices/JobSlice';
import axios from 'axios';

const JobListing = () => {
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.jobs);
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        // Fetch jobs and applied jobs when component mounts
        dispatch(fetchJobs());
        fetchAppliedJobs();
    }, [dispatch]);

    const fetchAppliedJobs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user/applied-jobs', {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setAppliedJobs(response.data.appliedJobs); // Adjust based on the exact structure of your API response
        } catch (error) {
            console.error("Failed to fetch applied jobs:", error);
        }
    };

    const handleApply = async (jobId) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/jobs/apply/${jobId}`, {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            toast.success(response.data.message || "Application submitted successfully");

            // Update appliedJobs state to include the newly applied job
            setAppliedJobs((prevAppliedJobs) => [...prevAppliedJobs, { _id: jobId }]);
        } catch (error) {
            console.error("Failed to apply:", error);
            toast.error("You may have already applied for this job.");
        }
    };

    const isApplied = (jobId) => appliedJobs.some(job => job._id === jobId);

    if (loading) return <Typography variant="h6">Loading jobs...</Typography>;
    if (error) return <Typography variant="h6">Error fetching jobs: {error}</Typography>;

    return (
        <Grid container spacing={3} sx={{
            paddingTop: { xs: '120rem', sm: '40rem', md: '30rem' },
            paddingLeft:{xs:'2rem'},
            paddingRight:{xs:'2rem'},

          
             // Adjust padding for smaller screens
          }} justifyContent="center">
            {jobs.length === 0 ? (
                <Typography variant="h6" align="center">
                    No jobs available.
                </Typography>
            ) : (
                jobs.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job._id}>
                        <Card sx={{ minHeight: 200 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {job.title}
                                </Typography>
                                <Typography color="textSecondary" sx={{ mt: 1 }}>
                                    {job.company}
                                </Typography>
                                <Typography color="textSecondary" sx={{ mt: 1 }}>
                                    Location: {job.location}
                                </Typography>
                                <Typography color="textSecondary" sx={{ mt: 1 }}>
                                    Description: {job.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color={isApplied(job._id) ? "success" : "primary"}
                                    disabled={isApplied(job._id)}
                                    onClick={() => handleApply(job._id)}
                                >
                                    {isApplied(job._id) ? "Applied" : "Apply"}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default JobListing;
