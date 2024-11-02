import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Typography, CardActions, Button, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchJobs, deleteJob } from '../../slices/JobSlice';

const JobList = ({ setSelectedJob, setEditing }) => {
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.jobs);

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

    if (loading) return <Typography variant="h6">Loading jobs...</Typography>;
    if (error) return <Typography variant="h6">Error fetching jobs: {error}</Typography>;

    return (
        <Grid container spacing={3} justifyContent="center">
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
                                <Button size="small" onClick={() => handleEdit(job)}>
                                    <EditIcon fontSize="small" />
                                    Edit
                                </Button>
                                <Button size="small" color="error" onClick={() => handleDelete(job._id)}>
                                    <DeleteIcon fontSize="small" />
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default JobList;
