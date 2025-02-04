import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Button, Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import JobPostForm from "./JobPostForm";
import JobList from "./JobList";
import { AllApplicants } from "../EmployerComponents/AllApplicants";
import { CompanyProfile } from "../EmployerComponents/CompanyProfile";
import AccountSettings from "../EmployerComponents/AccountSettings";
import EmployerPage from "./EmployerDashboard";

// Dummy job seekers data
const jobSeekers = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Senior UI/UX Designer",
        experience: "20+ years",
        skills: ["Figma", "Sketch", "Adobe XD", "React", "User Research"],
        image: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
        id: 2,
        name: "Sophia Brown",
        role: "AI & Machine Learning Engineer",
        experience: "15+ years",
        skills: ["Python", "TensorFlow", "NLP", "Deep Learning", "Cloud Computing"],
        image: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        id: 3,
        name: "Michael Lee",
        role: "Senior Full-Stack Developer",
        experience: "12+ years",
        skills: ["React", "Node.js", "MongoDB", "GraphQL", "AWS"],
        image: "https://randomuser.me/api/portraits/men/8.jpg"
    }
];

const EmployerLayout = () => {
    return (
        <Box className="min-h-screen flex flex-col bg-gradient-to-br  from-gray-100 to-gray-100 text-gray">

            {/* Main Content */}
          
                

                {/* Routes for Dashboard */}
                <Routes>
                    <Route path="/dashboard" element={<EmployerPage/>} />
                    <Route path="/jobs" element={<JobList />} />
                    <Route path="/post-job" element={<JobPostForm />} />
                    <Route path="/applicants" element={<AllApplicants />} />
                    <Route path="/company-profile" element={<CompanyProfile />} />
                    <Route path="/settings/account" element={<AccountSettings />} />
                </Routes>
              
        </Box>
    );
};

export default EmployerLayout;
