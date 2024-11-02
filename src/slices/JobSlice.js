import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for async operations (CRUD)
export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5000/api/jobs/');
      return response.data; // Assuming your API returns a list of jobs
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createJob = createAsyncThunk(
  'jobs/createJob',
  async (jobData, { rejectWithValue, getState }) => {
    const { auth } = getState(); // assuming auth has a token property
    try {
      const response = await axios.post('http://localhost:5000/api/jobs', jobData, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateJob = createAsyncThunk(
  'jobs/updateJob',
  async ({ id, jobData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/jobs/${id}`, jobData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteJob = createAsyncThunk(
  'jobs/deleteJob',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`);
      return id; // Return the id of the deleted job
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Job Slice
const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetching Jobs
    builder.addCase(fetchJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Creating a Job
    builder.addCase(createJob.fulfilled, (state, action) => {
      state.jobs.push(action.payload);
    });

    // Updating a Job
    builder.addCase(updateJob.fulfilled, (state, action) => {
      const index = state.jobs.findIndex((job) => job._id === action.payload._id);
      state.jobs[index] = action.payload;
    });

    // Deleting a Job
    builder.addCase(deleteJob.fulfilled, (state, action) => {
      state.jobs = state.jobs.filter((job) => job._id !== action.payload);
    });
  }
});

export default jobSlice.reducer;
