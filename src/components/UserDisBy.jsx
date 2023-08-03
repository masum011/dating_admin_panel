import React from 'react'
import Chart from 'chart.js/auto';

const UserDisBy = () => {
  const data = {
    labels: ['Total profile blocked', 'Total profile to be blocked'],
    datasets: [
      {
        label: 'User Profile',
        data: [300, 250],
        // backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
      },
    ],
  };

  const chartConfig = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: false,
      cutout: '80%', // Adjust the cutout value here to set the radius (e.g., '70%')
      legend: {
        display: true, // Disable the default legend
        position: "left"
      },
     
    },
  };

  React.useEffect(() => {
    const chartInstance = new Chart('profileblock', chartConfig);
    
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="profileblock" />
    </div>
  );
};

export default UserDisBy;


