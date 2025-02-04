import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, MenuItem, Select, Typography, Box, CircularProgress } from '@mui/material';
import { createJob } from '../../slices/JobSlice';

const JobPostForm = () => {
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
                if (response.payload && response.payload.success) {
                    toast.success('Job post created successfully! 🎉');
                    navigate('/');
                } else {
                    toast.error(response.payload?.message || 'Failed to create the job post. Please try again.');
                }
            })
            .catch((error) => {
                setLoading(false);
                toast.error('Something went wrong. Please try again.');
                console.error('Error creating job post:', error);
            });
    };

    return (
        <Box className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <Box className="w-full max-w-2xl p-8 bg-white shadow-2xl rounded-lg">
                <Typography variant="h4" gutterBottom align="center" className="mb-6 text-3xl font-semibold text-blue-700">
                    Post a New Job
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <TextField
                        label="Job Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        className="rounded-lg focus:ring-2 focus:ring-blue-500"
                        sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', fontSize: '1rem' } }}
                    />
                    <TextField
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        className="rounded-lg focus:ring-2 focus:ring-blue-500"
                        sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', fontSize: '1rem' } }}
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
                        variant="outlined"
                        className="rounded-lg focus:ring-2 focus:ring-blue-500"
                        sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', fontSize: '1rem' } }}
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
                        variant="outlined"
                        className="rounded-lg focus:ring-2 focus:ring-blue-500"
                        sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', fontSize: '1rem' } }}
                    />
                    <TextField
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        className="rounded-lg focus:ring-2 focus:ring-blue-500"
                        sx={{ '& .MuiInputLabel-root': { fontWeight: 'bold', fontSize: '1rem' } }}
                    />
                    <Box mt={2}>
                        <Select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            fullWidth
                            required
                            displayEmpty
                            renderValue={(selected) => (selected ? selected : 'Select Category')}
                            className="rounded-lg focus:ring-2 focus:ring-blue-500"
                            sx={{
                                '& .MuiSelect-root': {
                                    padding: '10px 14px',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                },
                            }}
                        >
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="Health">Health</MenuItem>
                            <MenuItem value="Marketing">Marketing</MenuItem>
                            <MenuItem value="Finance">Finance</MenuItem>
                            <MenuItem value="Design">Design</MenuItem>
                        </Select>
                    </Box>

                    <Box mt={4} className="flex justify-center">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={loading}
                            startIcon={loading && <CircularProgress size={20} color="inherit" />}
                            className="rounded-full px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-500"
                        >
                            {loading ? 'Posting...' : 'Post Job'}
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default JobPostForm;
