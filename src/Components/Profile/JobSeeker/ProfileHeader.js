// ProfileHeader.js
import React from 'react';
import { Avatar, Typography, LinearProgress, Box } from '@mui/material';

const ProfileHeader = ({ profile }) => {
  return (
    <Box display="flex" alignItems="center" mb={4}>
      <Avatar alt="Profile Picture" src={profile.picture} sx={{ width: 64, height: 64, mr: 2 }} />
      <Box>
        <Typography variant="h5">{profile.name}</Typography>
        <Typography variant="subtitle1">{profile.title || "Job Seeker"}</Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <Typography variant="body2">Profile Completion: {profile.completion}%</Typography>
          <LinearProgress variant="determinate" value={profile.completion} sx={{ width: '100%', ml: 2 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
