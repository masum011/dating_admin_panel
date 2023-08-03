import React from 'react'
import Chart from 'chart.js/auto';

const GenderRatio = () => {
  const data = {
    labels: ['Male', 'Female', 'Others'],
    datasets: [
      {
        label: 'Gender ratio',
        data: [300, 50, 100],
        // backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
      },
    ],
  };

  const chartConfig = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '80%', // Adjust the cutout value here to set the radius (e.g., '70%')
      legend: {
        display: false, // Disable the default legend
      },
     
    },
  };

  React.useEffect(() => {
    const chartInstance = new Chart('myChart1', chartConfig);
    
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="myChart1" />
    </div>
  );
};

export default GenderRatio;
