import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Card, CardContent, Typography, CardActions, Button, Grid, IconButton, Box, Divider, Avatar, Select, MenuItem, FormControl, InputLabel
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import { fetchJobs, deleteJob } from '../../slices/JobSlice';

const JobList = ({ setSelectedJob, setEditing }) => {
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.jobs);

    const [sortBy, setSortBy] = useState('date'); // Sorting jobs by date
    const [jobType, setJobType] = useState(''); // Filter for job type

    useEffect(() => {
        dispatch(fetchJobs()); // Fetch jobs when component mounts
    }, [dispatch]);

    const handleEdit = (job) => {
        setSelectedJob(job);
        setEditing(true);
    };

    const handleDelete = (jobId) => {
        dispatch(deleteJob(jobId));
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    const sortedJobs = [...jobs].sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.date) - new Date(a.date); // Sort by date descending
        } else if (sortBy === 'location') {
            return a.location.localeCompare(b.location); // Sort by location alphabetically
        }
        return 0;
    });

    const filteredJobs = sortedJobs.filter((job) => 
        jobType ? job.jobType === jobType : true
    );

    if (loading) return <Typography variant="h6">Loading jobs...</Typography>;
    if (error) return <Typography variant="h6">Error fetching jobs: {error}</Typography>;

    return (
        <Grid container spacing={4} sx={{ padding: 3 }}>
            {/* Left Section - Sorting/Filters */}
            <Grid item xs={12} md={3} sx={{ position: 'sticky', top: 20 }}>
                <Box sx={{ padding: 2, backgroundColor: '#fff', boxShadow: 3, borderRadius: '8px' }}>
                    <Typography variant="h6" gutterBottom>Filters</Typography>
                    
                    {/* Sort By */}
                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Sort By</InputLabel>
                        <Select
                            value={sortBy}
                            onChange={handleSortChange}
                            label="Sort By"
                        >
                            <MenuItem value="date">Date Posted</MenuItem>
                            <MenuItem value="location">Location</MenuItem>
                        </Select>
                    </FormControl>
                    
                    {/* Job Type Filter */}
                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Job Type</InputLabel>
                        <Select
                            value={jobType}
                            onChange={handleJobTypeChange}
                            label="Job Type"
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="Full-Time">Full-Time</MenuItem>
                            <MenuItem value="Part-Time">Part-Time</MenuItem>
                            <MenuItem value="Remote">Remote</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>

            {/* Right Section - Job Listings */}
            <Grid item xs={12} md={9}>
                <Box sx={{ maxHeight: '80vh', overflowY: 'auto', padding: '0 40px' }}>
                    {filteredJobs.length === 0 ? (
                        <Typography variant="h6" align="center">No jobs available.</Typography>
                    ) : (
                        filteredJobs.map((job) => (
                            <Card 
                                sx={{
                                    marginBottom: 3, 
                                    boxShadow: 3, 
                                    borderRadius: 3, 
                                    backgroundColor: '#ffffff', 
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)', 
                                        boxShadow: 8
                                    }
                                }} 
                                key={job._id}
                            >
                                <CardContent sx={{ position: 'relative' }}>
                                    {/* Job Title and Company */}
                                    <Typography 
                                        variant="h5" 
                                        component="div" 
                                        sx={{ fontWeight: 'bold', color: '#333' }}
                                    >
                                        {job.title}
                                    </Typography>
                                    <Typography 
                                        color="textSecondary" 
                                        sx={{ mt: 1, fontSize: '14px', fontStyle: 'italic', color: '#777' }}
                                    >
                                        {job.company}
                                    </Typography>

                                    {/* Job Location, Job Type, and Salary */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                        <LocationOnIcon sx={{ fontSize: 18, color: '#007bff' }} />
                                        <Typography 
                                            variant="body2" 
                                            sx={{ ml: 1, fontSize: '14px', color: '#007bff' }}
                                        >
                                            {job.location}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <WorkIcon sx={{ fontSize: 18, color: '#007bff' }} />
                                        <Typography 
                                            variant="body2" 
                                            sx={{ ml: 1, fontSize: '14px', color: '#007bff' }}
                                        >
                                            {job.jobType}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <Typography 
                                            variant="body2" 
                                            sx={{ ml: 1, fontSize: '14px', color: '#28a745' }}
                                        >
                                            Salary: {job.salary || 'Not disclosed'}
                                        </Typography>
                                    </Box>

                                    {/* Job Description */}
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            mt: 2, 
                                            color: '#333', 
                                            opacity: 0.9, 
                                            fontSize: '14px'
                                        }}
                                    >
                                        {job.description.length > 100 ? job.description.substring(0, 100) + '...' : job.description}
                                    </Typography>
                                </CardContent>

                                <Divider sx={{ my: 1 }} />

                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    {/* Edit Button */}
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        size="small" 
                                        onClick={() => handleEdit(job)} 
                                        sx={{
                                            borderRadius: '20px',
                                            '&:hover': { backgroundColor: '#0056b3' },
                                            padding: '8px 16px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <EditIcon fontSize="small" sx={{ mr: 0.5 }} />
                                        Edit
                                    </Button>
                                    {/* Delete Button */}
                                    <Button 
                                        variant="outlined" 
                                        color="error" 
                                        size="small" 
                                        onClick={() => handleDelete(job._id)} 
                                        sx={{
                                            borderRadius: '20px',
                                            '&:hover': { backgroundColor: '#ff4d4f' },
                                            padding: '8px 16px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <DeleteIcon fontSize="small" sx={{ mr: 0.5 }} />
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        ))
                    )}
                </Box>
            </Grid>
        </Grid>
    );
};

export default JobList;
