// ResumeAndSkills.js
import React from 'react';
import { Box, Typography, Button, Chip, Stack, TextField } from '@mui/material';

const ResumeAndSkills = ({ skills, onAddSkill, onRemoveSkill, onUploadResume }) => {
  const [newSkill, setNewSkill] = React.useState('');

  const handleAddSkill = () => {
    onAddSkill(newSkill);
    setNewSkill('');
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">Resume & Skills</Typography>
      <Button variant="contained" onClick={onUploadResume} sx={{ mt: 2 }}>Upload Resume</Button>
      <Stack direction="row" spacing={1} mt={3}>
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} onDelete={() => onRemoveSkill(skill)} />
        ))}
      </Stack>
      <Stack direction="row" spacing={2} mt={2}>
        <TextField
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          label="New Skill"
        />
        <Button variant="contained" onClick={handleAddSkill}>Add Skill</Button>
      </Stack>
    </Box>
  );
};

export default ResumeAndSkills;
