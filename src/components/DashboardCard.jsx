import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
export default function DashboardCard() {
  return (
    <>
        <div className="w-[31%] h-[173px] bg-[white] pl-4 py-8 rounded text-[14px]">
          <PersonIcon fontSize='large'/><br />
          <b className='text-[28px]'>2.65 Lacs</b>
          <p className='text-[#878787]'>Total users</p>
        </div>
    </>
  )
}
