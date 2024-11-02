// JobSeekerLayout.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AppliedJobs from './AppliedJobs';
import Profile from './Profile';
import JobListing from './JobListing';

const JobSeekerLayout = () => {
  return (
    <div>
      {/* Job Seeker specific routes without the "/jobseeker" prefix */}
      <Routes>
        <Route path="dashboard" element={<HomePage/>} />
        <Route path="job-listings" element={<JobListing />} />
        <Route path="applied-jobs" element={<AppliedJobs />} />
        <Route path="profile" element={<Profile/>} />
      </Routes>
    </div>
  );
};

export default JobSeekerLayout;
