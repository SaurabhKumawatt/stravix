import React from 'react'
import {Bar} from 'react-chartjs-2';

const salesTracker = () => {
    const data = {
        labels: ['Nov 24', 'Dec 24', 'Jan 25', 'Feb 25', 'March 25'],
        datasets: [ 
            {
                label: 'Monthly sales',
                data: [15000, 20000, 25000, 30000, 10000],
                backgroundcolor: 'rgba(75,192, 192, 0.6)',
            },
        ],
    };
  return (
    <div className="salesTracker">
        <h2>Sales Tracker</h2>
        <Bar data={data} />
    </div>
  );
};

export default salesTracker;