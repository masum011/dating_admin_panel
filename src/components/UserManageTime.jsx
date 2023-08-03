import { Button, ButtonGroup, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';

export default function UserManageTime() {
        const [selectedBtn, setSelectedBtn] = useState(3);

const pData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,2000,3444,2111,2334,2321];
const xLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL",'AUG','SEP','OCT','NOV','DEC'];

  return (
    <div className="bg-white rounded">
        <div className="line-top-items flex justify-between flex-wrap  px-4">
        <p className=" text-[21px] text-[#262626   ]">Usage Time</p>
        <div className="flex gap-4">
        <Button variant="outlined" size="small" sx={{borderRadius:"83px",textTransform:"none"}} color={selectedBtn === 1 ? "secondary" : "primary"} onClick={()=>setSelectedBtn(1)}>Daily</Button>
        <Button variant="outlined" size="small" sx={{borderRadius:"83px",textTransform:"none"}} color={selectedBtn === 2 ? "secondary" : "primary"} onClick={()=>setSelectedBtn(2)}>Weekly</Button>
        <Button variant="outlined" size="small" sx={{borderRadius:"83px",textTransform:"none"}} color={selectedBtn === 3 ? "secondary" : "primary"} onClick={()=>setSelectedBtn(3)}>Monthly</Button>
        </div>
        </div>
        <div className="h-[386px]">
      <LineChart
      series={[
        { data: pData, label: 'Total User' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />

        </div>
    </div>
  );
}
