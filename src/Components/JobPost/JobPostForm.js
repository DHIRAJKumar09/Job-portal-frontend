import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createJob } from '../../slices/JobSlice'; // Adjust the import path as needed
import { toast } from 'react-toastify';

const JobPostForm = () => {
  const dispatch = useDispatch();
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    description: '',
    location: '',
    // postedBy will be set from user state or props if needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if all required fields are filled before dispatching
      if (!jobData.title || !jobData.company || !jobData.description || !jobData.location) {
        toast.warning('Please fill in all required fields.');
        return;
      }

      // Optionally, you can add postedBy here if you know it
      await dispatch(createJob(jobData)); // Dispatch the create job action
       toast.success('Job posted successfully!');
      setJobData({
        title: '',
        company: '',
        description: '',
        location: '',
      }); // Reset the form after successful submission
    } catch (error) {
      console.error('Failed to post job:', error);
      toast.error('Failed to post job. Check console for details.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Job Title"
        name="title"
        value={jobData.title}
        onChange={handleChange}
        required
      />
      <TextField
        label="Company Name"
        name="company"
        value={jobData.company}
        onChange={handleChange}
        required
      />
      <TextField
        label="Job Description"
        name="description"
        value={jobData.description}
        onChange={handleChange}
        required
        multiline
        rows={4}
      />
      <TextField
        label="Location"
        name="location"
        value={jobData.location}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained">Post Job</Button>
    </Box>
  );
};

export default JobPostForm;
