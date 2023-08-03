import React from 'react'
import Chart from 'chart.js/auto';

const AgeCategory = () => {
  const data = {
    labels: ['From age to', 'From age to', 'Others','From age to','From age to'],
    datasets: [
      {
        label: 'Gender ratio',
        data: [300, 50, 100,22,32],
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
    const chartInstance = new Chart('myChart2', chartConfig);

    // Clean up the chart instance when the component unmounts
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="myChart2" />
    </div>
  );
};

export default AgeCategory;
