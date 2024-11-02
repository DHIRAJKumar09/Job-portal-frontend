import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './JobPost.css';

// Assuming you have a createJobPost function in your Redux slice
import {createJob} from '../../slices/JobSlice';

const PostJob = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !salary || !location) {
            toast.error('Please fill in all fields');
            return;
        } 

        setLoading(true);

        // Dispatch the action to create a job post
        dispatch(createJob({ title, description, salary, location }))
            .then((response) => {
                setLoading(false);
                if (response.payload.success) {
                    toast.success('Job post created successfully! 🎉');
                    navigate('/'); // Navigate to the homepage or job list page
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
        <div className="job-post-container">
            <div className="job-post-card">
                <h2 className="job-post-title">Post a New Job</h2>
                <form onSubmit={handleSubmit} className="job-post-form">
                    <input
                        type="text"
                        placeholder="Job Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="job-input"
                    />
                    <textarea
                        placeholder="Job Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="job-input job-textarea"
                    />
                    <input
                        type="number"
                        placeholder="Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                        className="job-input"
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        className="job-input"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={loading}
                        className="job-button"
                    >
                        {loading ? 'Posting...' : 'Post Job'}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default PostJob;
