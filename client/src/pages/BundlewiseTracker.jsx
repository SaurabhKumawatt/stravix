import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const BundlewiseTracker = () => {
    const data = {
        labels: ['Personal Branding', 'Soft Skills', 'Digital Marketing', 'online Marketing', 'Finance Mastry', 'Data Science'],
        datasets: [{
            data: [10,20,30,15,10,15],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0c0', '#9966FF', '#FF9F40'],
        }],
        };
  return (
    <div style={{ width: '300px', height: '300px' }}>
        <h2>BundlewiseTracker</h2>
        <Pie data={data} />
        </div>
  );
};

export default BundlewiseTracker;