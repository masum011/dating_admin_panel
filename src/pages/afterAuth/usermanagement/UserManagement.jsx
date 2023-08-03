import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { InputAdornment, MenuItem, Select } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
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
    sortable: false,
    
  },
  {
    field: "col1",
    headerName: 'Name' ,
    headerClassName: "table-head",
    width: 150,
    sortable: false,

  },
  {
    field: "col2",
    headerName: "Country",
    headerClassName: "table-head",
    width: 150,
    sortable: false,
  },
  {
    field: "col3",
    headerName: "Contact",
    headerClassName: "table-head",
    width: 150,
    sortable: false,
  },
  {
    field: "col4",
    headerName: "Continent",
    headerClassName: "table-head",
    width: 150,
    sortable: false,
  },
  {
    field: "col5",
    headerName: <>Date of joining <FilterAltOutlinedIcon/></>,
    headerClassName: "table-head",
    width: 150,
    sortable: false,

  },
  {
    field: "col6",
    headerName: <>Gender <FilterAltOutlinedIcon/></>,
    headerClassName: "table-head",
    width: 150,
    sortable: false,
  },
  {
    field: "col7",
    headerName: <>Status <FilterAltOutlinedIcon/></>,
    headerClassName: "table-head",
    width: 150,
    sortable: false,
    // renderCell: (params) =>{
    //   return(
    //     <>
        
    //     </>
    //   )
    // }
  },
];

export default function UserManagement() {
  const navigate = useNavigate();
  const [age1, setAge1] = React.useState(10);
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const handleSelectionModelChange = (e) => {
    console.log(e);
    if (e[0]) {
      navigate("/user-management-row");
    }
  };

  return (
    <div className="p-[2rem] bg-[#eaeaea]">
      <div className="user-m-table bg-white ">
        <div id="w-[100%]">
          <div className="search-section flex justify-between p-4">
            <div className="search flex gap-12 ">
              <p className="text-[28px]">Users List</p>
              <input type="text" placeholder="Search users" />
            </div>
            <div className="download-pdf">
              <Select
                value={age1}
                onChange={handleChange1}
                size="small"
                startAdornment={
                  <InputAdornment position="start">
                    <DownloadIcon fontSize="small" />
                  </InputAdornment>
                }
                sx={{ borderRadius: "8px", width: "14rem" }}
              >
                <MenuItem value={10}>Download as PDF</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
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
            // disableColumnFilter
            disableColumnMenu
          />
        </Box>
      </div>
    </div>
  );
}
