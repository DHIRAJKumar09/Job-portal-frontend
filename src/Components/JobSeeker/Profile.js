// JobSeekerProfile.js
import React, { useState } from 'react';
import { Container } from '@mui/material';
import ProfileHeader from './ProfileHeader';
import PersonalInformation from './PersonalInformation';
import ResumeAndSkills from './ResumeSkills';
import JobApplications from './JobApplications';
import Preferences from './Preferences';

const JobSeekerProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    title: "Software Developer",
    picture: "/path/to/picture.jpg",
    completion: 75,
    location: "New York",
    email: "johndoe@example.com"
  });

  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [applications, setApplications] = useState([
    { title: "Frontend Developer", location: "New York", status: "Applied" },
    { title: "Backend Developer", location: "Remote", status: "Interviewing" }
  ]);
  const [preferences, setPreferences] = useState({
    remote: false,
    location: "",
    salary: ""
  });

  const handleAddSkill = (skill) => setSkills([...skills, skill]);
  const handleRemoveSkill = (skill) => setSkills(skills.filter(s => s !== skill));
  const handleUploadResume = () => alert("Resume uploaded!");

  return (
    <Container  sx={{
        paddingTop: { xs: '50rem', sm: '50rem', md: '50rem' }, // Adjust padding for smaller screens
      }}>
      <ProfileHeader profile={profile} />
      <PersonalInformation profile={profile} onUpdate={setProfile} />
      <ResumeAndSkills skills={skills} onAddSkill={handleAddSkill} onRemoveSkill={handleRemoveSkill} onUploadResume={handleUploadResume} />
      <JobApplications applications={applications} />
      <Preferences preferences={preferences} onChangePreferences={setPreferences} />
    </Container>
  );
};

export default JobSeekerProfile;
