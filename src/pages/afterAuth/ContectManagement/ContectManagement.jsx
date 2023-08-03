import { Box, InputAdornment, MenuItem, Select, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import ContentMgModal from "../../../components/ContentMgModal";
const rows = [
  {
    id: 1,
    col1: "Masum Reza",
    col2: "India",
    col3: "9800141572",
    col4: "Asia",
    col5: "01/02/2022",
    col6: "Male",
    col7: "Sucess",
  },
];

const columns = [
  {
    field: "id",
    headerName: "SL No.",
    headerClassName: "table-head",
    width: 150,
  },
  {
    field: "col1",
    headerName: "Picture",
    headerClassName: "table-head",
    width: 150,
  },
  {
    field: "col2",
    headerName: "Title",
    headerClassName: "table-head",
    width: 250,
  },
  {
    field: "col3",
    headerName: "Description",
    headerClassName: "table-head",
    width: 250,
  },
  {
    field: "col4",
    headerName: "No. Of Click",
    headerClassName: "table-head",
    width: 250,
  },
  {
    field: "col5",
    headerName: "Date",
    headerClassName: "table-head",
    width: 150,
  },
  {
    field: "col6",
    headerName: "Publicsh",
    headerClassName: "table-head",
    width: 150,
  },
];

export default function ContectManagement() {
  const navigate = useNavigate();
  const [open,setIsOpen]=useState(false);
  const handleOpen=()=>setIsOpen(true)
  const handleClose=()=>setIsOpen(false);
  const handleSelectionModelChange = (e) => {
    console.log(e);
    if (e[0]) {
      navigate("/content-management-row");
    }
  };

  return (
    <div>
      <div className="p-[2rem] bg-[#eaeaea]">
        <div className="user-m-table bg-white ">
          <div id="w-[100%]">
            <div className="search-section flex justify-between p-4">
              <div className="search flex gap-12 ">
                <p className="text-[28px]">Content managment</p>
                <input type="text" placeholder="Search users" />
              </div>
              <div className="add-notification-btn">
                <button className="px-8 py-[10px] bg-[#FF6B6B] text-[white]"onClick={handleOpen} >
                  <AddIcon fontSize="small" /> Add notification
                </button>
              </div>
            </div>
          </div>
          <Box
            sx={{
              height: 300,
              width: "100%",
              "& .table-head": {
                backgroundColor: "#DFDFDF",
              },
            }}
          >
            <DataGrid
              rows={rows}
              onRowSelectionModelChange={handleSelectionModelChange}
              columns={columns}
            />
          </Box>
        </div>
      </div>
        <ContentMgModal isOpen={open} isClose={handleClose}/>
    </div>
  );
}
