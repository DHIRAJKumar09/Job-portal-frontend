import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, MenuItem, Select, Typography, Box, CircularProgress } from '@mui/material';
import { createJob } from '../../slices/JobSlice';
import './JobPost.css';

const PostJob = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        company: '',
        description: '',
        salary: '',
        location: '',
        category: '',
    });
    const [loading, setLoading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(formData).some(field => field === '')) {
            toast.error('Please fill in all fields');
            return;
        }

        setLoading(true);

        // Dispatch the action to create a job post
        dispatch(createJob(formData))
            .then((response) => {
                setLoading(false);
                if (response.payload.success) {
                    toast.success('Job post created successfully! 🎉');
                    navigate('/');
                } else {
                    toast.error('Failed to create the job post. Please try again.');
                }
            })
            .catch((error) => {
                setLoading(false);
                toast.error('Something went wrong. Please try again.');
                console.error('Error creating job post:', error);
            });
    };

    return (
        <Box className="job-post-container" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Box className="job-post-card" sx={{ maxWidth: 600, width: '100%', padding: 4, boxShadow: 3, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom align="center" color="primary">
                    Post a New Job
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Job Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Job Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        fullWidth
                        required
                        multiline
                        rows={4}
                        margin="normal"
                    />
                    <TextField
                        label="Salary"
                        name="salary"
                        type="number"
                        value={formData.salary}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <Select
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        fullWidth
                        required
                        displayEmpty
                        renderValue={(selected) => (selected ? selected : 'Select Category')}
                        margin="normal"
                    >
                        <MenuItem value="IT">IT</MenuItem>
                        <MenuItem value="Health">Health</MenuItem>
                        <MenuItem value="Marketing">Marketing</MenuItem>
                        <MenuItem value="Finance">Finance</MenuItem>
                        <MenuItem value="Design">Design</MenuItem>
                    </Select>
                    <Box mt={2} display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={loading}
                            startIcon={loading && <CircularProgress size={20} color="inherit" />}
                        >
                            {loading ? 'Posting...' : 'Post Job'}
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default PostJob;
