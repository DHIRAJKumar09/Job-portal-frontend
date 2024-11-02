// Preferences.js
import React from 'react';
import { Box, Typography, FormControlLabel, Checkbox, Stack, TextField } from '@mui/material';

const Preferences = ({ preferences, onChangePreferences }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6">Job Preferences</Typography>
      <Stack spacing={2} mt={2}>
        <FormControlLabel
          control={<Checkbox checked={preferences.remote} onChange={(e) => onChangePreferences({ ...preferences, remote: e.target.checked })} />}
          label="Remote Jobs Only"
        />
        <TextField
          label="Preferred Job Location"
          value={preferences.location}
          onChange={(e) => onChangePreferences({ ...preferences, location: e.target.value })}
        />
        <TextField
          label="Minimum Salary"
          value={preferences.salary}
          onChange={(e) => onChangePreferences({ ...preferences, salary: e.target.value })}
          type="number"
        />
      </Stack>
    </Box>
  );
};

export default Preferences;
