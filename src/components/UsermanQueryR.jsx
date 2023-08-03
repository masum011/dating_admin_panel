import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import Box from '@mui/material/Box';
const rows = [
    { id: 1, col1: "Hello", col2: "World",col3:"Hello, I just joined your dating app and I'm having trouble setting up my account. It keeps giving ..." },
    { id: 2, col1: "DataGridPro", col2: "is Awesome",col3:"Hello, I just joined your dating app and I'm having trouble setting up my account. It keeps giving ..." },
    { id: 3, col1: "MUI", col2: "is Amazing",col3:"Hello, I just joined your dating app and I'm having trouble setting up my account. It keeps giving ..." },
    { id: 4, col1: "MUI", col2: "is Amazing",col3:"Hello, I just joined your dating app and I'm having trouble setting up my account. It keeps giving ..." },
    { id: 5, col1: "MUI", col2: "is Amazing",col3:"Hello, I just joined your dating app and I'm having trouble setting up my account. It keeps giving ..." },
    { id: 6, col1: "MUI", col2: "is Amazing",col3:"Hello, I just joined your dating app and I'm having trouble setting up my account. It keeps giving ..." },
  ];
  
  const columns = [
    { field: "col1", headerName: "SL No.",headerClassName:"table-head", width: 150, },
    { field: "col2", headerName: "Date",headerClassName:"table-head", width: 150 },
    { field: "col3", headerName: "Query",headerClassName:"table-head", width: 450 },
    { field: "col5", headerName: "Status",headerClassName:"table-head", width: 150 },
    { field: "col6", headerName: "Attachment",headerClassName:"table-head", width: 150 },
  ];

export default function UsermanQueryR() {
  return (
    <div>
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
          columns={columns} />
    </Box>
    </div>
  )
}
