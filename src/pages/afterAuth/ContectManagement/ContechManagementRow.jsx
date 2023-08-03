import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { Button, InputAdornment, MenuItem, Select } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { DataGrid } from '@mui/x-data-grid';


const rows = [
    {
      id: 1,
      username: '@MUI',
      age: 38,
    },
  ];



export default function ContechManagementRow() {
  const navigate = useNavigate();
  const [selectedBtn, setSelectedBtn] = useState(2);
  const [age, setAge] = useState(10);
  const handlechange = (e) => {
    setAge(e.target.value);
  };
  return (
    <div>
      <div className="path-transaction flex p-4">
        <p
          className="text-[#B7B7B7] cursor-pointer"
          onClick={() => navigate("/content-management")}
        >
          Content managment /
        </p>
        <span className="text-[#6F6F6F]"> Find you bro code friend🤩</span>
      </div>
      <div className="p-[2rem] bg-[#eaeaea]">
        <div className="user-m-table bg-white p-8 ">
          <div className=" flex justify-between">
            <div>
              <p className="text-[20px]">User interacted with notification</p>
              <div className="flex gap-3">
                <p className="text-[34px]">3,420</p>
                <div className="download-icon flex gap-2 self-center ">
                  <p className="text-[#33A40E]">
                    <DownloadForOfflineIcon /> 23%
                  </p>
                  <p className="text-[#878787]">Than last month</p>
                </div>
              </div>
            </div>
            <div className="btn-select-download-icon  flex gap-4 self-center">
                <div className="content-mg-btn py-1 flex gap-4">
                <Button variant="outlined" size="small" color="inherit" className={selectedBtn===1 ? "selectstyle" : "nonselectstyle"}  onClick={()=>setSelectedBtn(1)}>Daily</Button>
                <Button variant="outlined" size="small" color="inherit" className={selectedBtn===2 ? "selectstyle" : "nonselectstyle"} onClick={()=>setSelectedBtn(2)}>Weekly</Button>
                <Button variant="outlined" size="small" color="inherit" className={selectedBtn===3 ? "selectstyle" : "nonselectstyle"} onClick={()=>setSelectedBtn(3)}>Monthly</Button>
                <Button variant="outlined" size="small" color="inherit" className={selectedBtn===4 ? "selectstyle" : "nonselectstyle"} onClick={()=>setSelectedBtn(4)}>Custom</Button>
              </div>

              <div className="download-pdf h-[35px]">
                <Select
                  value={age}
                  onChange={handlechange}
                  size="small"
                  startAdornment={
                    <InputAdornment position="start">
                      <DownloadIcon fontSize="small" />
                    </InputAdornment>
                  }
                  sx={{ borderRadius: "8px", width: "14rem" }}
                >
                  <MenuItem value={10}>Download as PDF</MenuItem>
                  <MenuItem value={20}>Download as Excel</MenuItem>
                </Select>
              </div>
            </div>
          </div>
          <div className="dataGrid-table pt-4">
          <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={[{ field: 'username', width: 200 }, { field: 'age' },{hide:true}]}
    
        
      />
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
