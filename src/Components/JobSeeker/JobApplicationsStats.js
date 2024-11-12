import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DailyApplicationsChart from './DailyApplicationsCharts';

const JobApplicationStats = () => {
  const [stats, setStats] = useState({
    todayApplications: 0,
    monthApplications: 0,
    yearApplications: 0,
    dailyApplications: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('https://job-backend-portal.onrender.com/api/jobs/applications/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h2>Job Application Statistics</h2>
      <p>Today: {stats.todayApplications}</p>
      <p>This Month: {stats.monthApplications}</p>
      <p>This Year: {stats.yearApplications}</p>

      {/* Render daily applications chart */}
      <DailyApplicationsChart dailyApplications={stats.dailyApplications} />
    </div>
  );
};

export default JobApplicationStats;
