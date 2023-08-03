import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { InputAdornment, MenuItem, Select } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";

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
    headerName: "Name",
    headerClassName: "table-head",
    width: 150,
  },
  {
    field: "col2",
    headerName: "Country",
    headerClassName: "table-head",
    width: 150,
  },
  {
    field: "col3",
    headerName: "Contact",
    headerClassName: "table-head",
    width: 150,
  },
  {
    field: "col4",
    headerName: "Continent",
    headerClassName: "table-head",
    width: 150,
  },
  {
    field: "col5",
    headerName: "Date of joining",
    headerClassName: "table-head",
    width: 150,
  },
  {
    field: "col6",
    headerName: "Gender",
    headerClassName: "table-head",
    width: 150,
  },
  {
    field: "col7",
    headerName: "Status",
    headerClassName: "table-head",
    width: 150,
  },
];

export default function HelpDesk() {
  const navigate = useNavigate();
  const [age1, setAge1] = React.useState(10);
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const handleSelectionModelChange = (e) => {
    console.log(e);
    if (e[0]) {
      navigate("/help-desk-row");
    }
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="p-[2rem] bg-[#eaeaea]">
      <div className="user-m-table bg-white ">
        <div id="w-[100%]">
          <div className="search-section flex justify-between p-4">
            <div className="search flex gap-12 ">
              <p className="text-[28px]">Help Desk</p>
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
        <div className="query-report">
          <Box sx={{ width: "100%",  }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab label="Query" value="1" sx={{ textTransform: "none" }} />
                  <Tab
                    label="Report"
                    value="2"
                    sx={{ textTransform: "none" }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
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
              </TabPanel>
              <TabPanel value="2">
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
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
}
