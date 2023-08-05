import { Button, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DownloadIcon from "@mui/icons-material/Download";
// import { Line } from "react-chartjs-2";

export default function UserActivity() {
  const [selectedBtn, setSelectedBtn] = useState(3);

  //   const data = {
  //     labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  //     datasets: [
  //       {
  //         label: "Example Dataset",
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //         fill: false,
  //         borderColor: "rgba(75,192,192,1)",
  //       },
  //       {
  //         label: "Dataset 2",
  //         data: [50, 40, 65, 70, 75, 80, 85],
  //         fill: false,
  //         borderColor: "rgba(255, 99, 132, 1)",
  //       },
  //     ],
  //   };
  //   const options = {

  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   };

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const inactive = [1000, 1298, 3800, 2908, 3800, 3800, 2300];
  const xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [age, setAge] = React.useState(10);
  const [age1, setAge1] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  return (
    <div className="bg-white p-8 rounded">
      <div className="line-top-items flex justify-between flex-wrap  px-4">
        <p className=" text-[21px] text-[#262626   ]">User Activity</p>
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          className={selectedBtn === 1 ? "selectstyle" : "nonselectstyle"}
          onClick={() => setSelectedBtn(1)}
        >
          Daily
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          className={selectedBtn === 2 ? "selectstyle" : "nonselectstyle"}
          onClick={() => setSelectedBtn(2)}
        >
          Weekly
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          className={selectedBtn === 3 ? "selectstyle" : "nonselectstyle"}
          onClick={() => setSelectedBtn(3)}
        >
          Monthly
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          className={selectedBtn === 4 ? "selectstyle" : "nonselectstyle"}
          onClick={() => setSelectedBtn(4)}
        >
          Custom
        </Button>
        <div className="select-drop">
          <Select
            value={age}
            onChange={handleChange}
            size="small"
            sx={{
              borderRadius: "8px",
              width: "7rem",
              height: "2rem",
              fontSize: "14px",
            }}
          >
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <div className="select-drop">
          <Select
            value={age1}
            onChange={handleChange1}
            size="small"
            startAdornment={
              <InputAdornment position="start">
                <DownloadIcon fontSize="small" />
              </InputAdornment>
            }
            sx={{
              borderRadius: "8px",
              width: "14rem",
              height: "2rem",
              fontSize: "14px",
            }}
          >
            <MenuItem value={10}>Download as PDF</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </div>
      <div className="h-[386px]">
        {/* <Line data={data} options={options} /> */}
        <LineChart
          series={[
            { data: pData, label: "Total User" },
            { data: uData, label: "Active User" },
            { data: inactive, label: "Inactive User" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
        />
      </div>
    </div>
  );
}
