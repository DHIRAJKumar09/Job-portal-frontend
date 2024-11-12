import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2'; // Import chart types from react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ApplicationStats = () => {
  const [stats, setStats] = useState({
    todayCount: 0,
    monthCount: 0,
    yearCount: 0,
    dailyCounts: [],
  });

  // Fetch application stats from backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('https://job-backend-portal.onrender.com/api/jobs/applications/stats', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Include the JWT token if needed
        });
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching application stats:', error);
      }
    };

    fetchStats();
  }, []);

  // Data for the daily applications chart
  const dailyData = {
    labels: stats.dailyCounts.map((item) => item._id), // The date string in YYYY-MM-DD format
    datasets: [
      {
        label: 'Applications per Day',
        data: stats.dailyCounts.map((item) => item.count), // The count of applications for each date
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        tension: 0.3, // To create a line curve
      },
    ],
  };

  // Data for the total applications by month and year (Bar Chart)
  const barData = {
    labels: ['Today', 'This Month', 'This Year'],
    datasets: [
      {
        label: 'Applications',
        data: [stats.todayCount, stats.monthCount, stats.yearCount],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container sx={{ paddingTop: 90, paddingX: 2,mb:8}} maxWidth="lg" px={2} >
      <Typography variant="h4" gutterBottom align="center">
        Your Job Application Stats
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Total Applications (Today, This Month, This Year) */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h6">Applications by Time Period</Typography>
            <Bar data={barData} options={{ responsive: true }} />
          </Paper>
        </Grid>

        {/* Daily Applications Chart */}
        <Grid item xs={12} sm={6} md={8}>
          <Paper sx={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h6">Applications Over Time (Daily)</Typography>
            <Line data={dailyData} options={{ responsive: true }} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ApplicationStats;
