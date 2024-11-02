// PersonalInformation.js
import React from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';

const PersonalInformation = ({ profile, onUpdate }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [formData, setFormData] = React.useState(profile);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => {
    onUpdate(formData);
    setEditMode(false);
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">Personal Information</Typography>
      <Stack spacing={2} mt={2}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          disabled={!editMode}
        />
        <TextField
          name="location"
          label="Location"
          value={formData.location}
          onChange={handleChange}
          disabled={!editMode}
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          disabled={!editMode}
        />
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Edit"}
          </Button>
          {editMode && <Button variant="contained" onClick={handleSave}>Save</Button>}
        </Stack>
      </Stack>
    </Box>
  );
};

export default PersonalInformation;
