import { Box, InputAdornment, MenuItem, Select } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
const rows = [
  { id: 1, col1: "Masum Reza", col2: "India",col3:"9800141572",col4:"Asia", col5:"01/02/2022", col6:"Male", col7: "Sucess" },
];

const columns = [
  { field: "id", headerName: "SL No.", headerClassName:"table-head", width: 150 },
  { field: "col1", headerName: "Name",headerClassName:"table-head", width: 250 },
  { field: "col2", headerName: "Date",headerClassName:"table-head", width: 250 },
  { field: "col3", headerName: "Amount",headerClassName:"table-head", width: 250 },
  { field: "col4", headerName: "Continent",headerClassName:"table-head", width: 250 },
  { field: "col5", headerName: "Invioce",headerClassName:"table-head", width: 250 },
];

export default function TransactionHistory() {

  const navigate=useNavigate()
  const [age1, setAge1] = React.useState(10);
  const [age, setAge] = React.useState(10);
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  const handlechange=(e)=>{
    setAge(e.target.value)
  }

  const handleSelectionModelChange = (e) => {
    console.log(e)
    if(e[0]){
      navigate('/transaction-history-row')
    }
  };

  return (
    <div>
      <div className="p-[2rem] bg-[#eaeaea]">
      <div className="user-m-table bg-white ">
        <div id="w-[100%]">
          <div className="search-section flex justify-between p-4">
            <div className="search flex gap-12 ">
            <p className="text-[28px]">Transaction History</p>
            <input type="text" placeholder="Search users"  />
            </div>
            <div className="download-pdf">
            <Select
          value={age}
          onChange={handlechange}
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <DownloadIcon  fontSize="small"/>
            </InputAdornment>
            }
          sx={{borderRadius:"8px",width:"14rem"}}>
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Asia</MenuItem>
          <MenuItem value={30}>North america</MenuItem>
          <MenuItem value={30}>South america</MenuItem>
          <MenuItem value={30}>Africa</MenuItem>
          <MenuItem value={30}>Australia</MenuItem>
          <MenuItem value={30}>Antartica</MenuItem>
        </Select>
            </div>

            <div className="download-pdf">
            <Select
          value={age1}
          onChange={handleChange1}
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <DownloadIcon  fontSize="small"/>
            </InputAdornment>
            }
          sx={{borderRadius:"8px",width:"14rem"}}>
          <MenuItem value={10}>Download as PDF</MenuItem>
          <MenuItem value={20}>View invoice</MenuItem>
          <MenuItem value={30}>Download invoice</MenuItem>
        </Select>
            </div>
          </div>
        </div>
        <Box
      sx={{
        height: 300,
        width: '100%',
        '& .table-head': {
          backgroundColor: '#DFDFDF',
        },
      }}
    >
          <DataGrid rows={rows}
            onRowSelectionModelChange={handleSelectionModelChange}
          columns={columns} />

    </Box>
      </div>
    </div>

    </div>
  )
}
