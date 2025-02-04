import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, InputBase, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CheckCircle, Cancel, Visibility } from '@mui/icons-material'; // Correct imports

export const AllApplicants = () => {
  const [applicants, setApplicants] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', appliedFor: 'Software Engineer', status: 'Applied' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', appliedFor: 'Product Manager', status: 'Shortlisted' },
    { id: 3, name: 'Samuel Green', email: 'samuel.green@example.com', appliedFor: 'Data Scientist', status: 'Rejected' },
    // Add more applicants for example
  ]);

  const handleShortlist = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: 'Shortlisted' } : applicant
      )
    );
  };

  const handleReject = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: 'Rejected' } : applicant
      )
    );
  };

  const handleViewResume = (id) => {
    // Placeholder for viewing resume functionality
    alert(`Viewing resume for applicant ${id}`);
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Title */}
      <Typography variant="h6" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
        Applicants for Your Job Listing
      </Typography>

      {/* Search/Filter Section */}
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={6}>
          <InputBase
            sx={{
              width: '100%',
              backgroundColor: '#f5f5f5',
              padding: '8px 16px',
              borderRadius: '20px',
              boxShadow: 2,
            }}
            placeholder="Search Applicants"
            startAdornment={<SearchIcon />}
          />
        </Grid>
      </Grid>

      {/* Applicants Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#007bff' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Applied For</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants.map((applicant) => (
              <TableRow key={applicant.id}>
                <TableCell>{applicant.name}</TableCell>
                <TableCell>{applicant.email}</TableCell>
                <TableCell>{applicant.appliedFor}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      padding: '6px 10px',
                      backgroundColor:
                        applicant.status === 'Shortlisted'
                          ? '#28a745'
                          : applicant.status === 'Rejected'
                          ? '#dc3545'
                          : '#ffc107',
                      color: '#fff',
                      borderRadius: '15px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {applicant.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton color="primary" onClick={() => handleViewResume(applicant.id)}>
                      <Visibility />
                    </IconButton>
                    <IconButton color="success" onClick={() => handleShortlist(applicant.id)}>
                      <CheckCircle />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleReject(applicant.id)}>
                      <Cancel />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Footer Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '10px 20px',
            borderRadius: '30px',
            fontWeight: 'bold',
            boxShadow: 2,
            '&:hover': { backgroundColor: '#0056b3' },
          }}
        >
          Load More Applicants
        </Button>
      </Box>
    </Box>
  );
};
