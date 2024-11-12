import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DailyApplicationsChart = ({ dailyApplications }) => {
  const chartData = {
    labels: dailyApplications.map(app => app._id), // Dates
    datasets: [
      {
        label: 'Applications per Day',
        data: dailyApplications.map(app => app.count),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily Job Applications',
      },
    },
    scales: {
      x: {
        title: { display: true, text: 'Date' },
      },
      y: {
        title: { display: true, text: 'Applications' },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default DailyApplicationsChart;
