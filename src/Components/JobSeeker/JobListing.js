import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  TextField,
  Pagination,
  Typography,
  CardActions,
  Box,
  Button,
  Grid,
  CircularProgress,
} from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';

const JobListing = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [newJobs, setNewJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Jobs with filters
  const fetchJobs = async (currentPage = 1) => {
    try {
      const response = await axios.get('https://job-backend-portal.onrender.com/api/jobs/search', {
        params: {
          keywords: searchTerm,
          location,
          category,
          page: currentPage,
          limit: limit,
        },
      });
      const { jobs, totalPages } = response.data;
      setNewJobs(jobs);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error fetching jobs', error);
    }
  };

  // Fetch new and applied jobs data
  const fetchJobsData = async () => {
    try {
      const newJobsResponse = await axios.get('https://job-backend-portal.onrender.com/api/applications/new-jobs', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const appliedJobsResponse = await axios.get('https://job-backend-portal.onrender.com/api/applications/applied-job', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setNewJobs(newJobsResponse.data);
      setAppliedJobs(appliedJobsResponse.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Failed to load jobs.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobsData();
    fetchJobs();
  }, []);

  // Handle search
  const handleSearch = () => {
    setPage(1);
    fetchJobs(1);
  };

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
    fetchJobs(value);
  };

  // Handle applying to a job
  const handleApply = async (jobId) => {
    try {
      if (appliedJobs.some((job) => job._id === jobId)) {
        toast.error('You have already applied for this job.');
        return;
      }
      const response = await axios.post(
        `https://job-backend-portal.onrender.com/api/jobs/apply/${jobId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      toast.success(response.data.message || 'Application submitted successfully');
      setAppliedJobs((prevAppliedJobs) => [...prevAppliedJobs, { _id: jobId }]);
    } catch (error) {
      console.error('Failed to apply:', error);
      toast.error('An error occurred while applying for the job.');
    }
  };

  if (loading)
    return (
      <Grid container justifyContent="center" sx={{ padding: '2rem' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ marginLeft: 2 }}>
          Loading jobs...
        </Typography>
      </Grid>
    );

  if (error)
    return (
      <Typography variant="h6" color="error" align="center" sx={{ marginTop: '2rem' }}>
        {error}
      </Typography>
    );

  return (
    <Box sx={{ paddingTop: 90, paddingX: 2 }}>
      {/* Grid Layout for Left (Search) and Right (Job Listings) */}
      <Grid container spacing={3} justifyContent="center">
        {/* Left Section for Search Filters */}
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Search Filters
            </Typography>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" onClick={handleSearch} fullWidth>
              Search
            </Button>
          </Box>
        </Grid>

        {/* Right Section for Job Listings */}
        <Grid item xs={12} sm={8} md={9}>
          <Box sx={{ paddingLeft: { xs: 0, sm: 3 } }}>
            {/* Job Listings */}
            <Grid container spacing={3}>
              {newJobs.length === 0 ? (
                <Typography variant="h6" align="center" sx={{ width: '100%', padding: '2rem' }}>
                  No new jobs available.
                </Typography>
              ) : (
                newJobs.map((job) => (
                  <Grid item xs={12} sm={6} md={4} key={job._id}>
                    <Card
                      sx={{
                        minHeight: 300,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: 3,
                        borderRadius: 2,
                        transition: '0.3s',
                        '&:hover': {
                          boxShadow: 6,
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                          {job.title}
                        </Typography>
                        <Typography color="textSecondary" sx={{ mt: 1, fontSize: '1rem' }}>
                          {job.company}
                        </Typography>
                        <Typography color="textSecondary" sx={{ mt: 1 }}>
                          <strong>Location:</strong> {job.location}
                        </Typography>
                        <Typography color="textSecondary" sx={{ mt: 1, height: '4rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          <strong>Description:</strong> {job.description}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'flex-end', padding: 2 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleApply(job._id)}
                          disabled={appliedJobs.some((appliedJob) => appliedJob._id === job._id)}
                          sx={{
                            width: '100%',
                            backgroundColor: appliedJobs.some((appliedJob) => appliedJob._id === job._id) ? 'grey' : 'primary.main',
                            '&:hover': {
                              backgroundColor: appliedJobs.some((appliedJob) => appliedJob._id === job._id) ? 'grey' : 'primary.dark',
                            },
                          }}
                        >
                          {appliedJobs.some((appliedJob) => appliedJob._id === job._id) ? 'Applied' : 'Apply'}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              )}
            </Grid>

            {/* Pagination Controls */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobListing;
