import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FF6B6B" : "#308fe8",
  },
}));

export default function UserDistributed({value}) {
  return (
    <div className="py-4">
        <div className="user-bio flex justify-between">
        <h1>Asia</h1>
        <h1>35 lacs</h1>
        </div>
      <BorderLinearProgress variant="determinate" value={value} />
    </div>
  );
}
