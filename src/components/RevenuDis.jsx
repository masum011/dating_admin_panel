import React from "react";
import Chart from "chart.js/auto";

const RevenuDis = () => {
  const data = {
    labels: [
      "Asia",
      "South america",
      "North america",
      "Australia",
      "Antartica",
      "Europe",
      "Africa",
    ],
    datasets: [
      {
        label: "Revenue distributed by continent",
        data: [300, 50, 100, 22, 12, 44, 66],
        // backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
      },
    ],
  };

  const chartConfig = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "80%", // Adjust the cutout value here to set the radius (e.g., '70%')
      legend: {
        display: true, // Disable the default legend
        position: "left",
      },
    },
  };

  React.useEffect(() => {
    const chartInstance = new Chart("myChart", chartConfig);

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="myChart" />
    </div>
  );
};

export default RevenuDis;
