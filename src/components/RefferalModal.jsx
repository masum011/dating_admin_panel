import { Divider } from '@mui/material'
import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
const numberuser=[
    {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
    {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
    {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
    {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
    {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
    {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
  ]
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "814px",
    bgcolor: 'background.paper',
  //   border: '2px solid #000',
    
    boxShadow: 24,
    p: 4,
    borderRadius:"16px",
  };
  
export default function RefferalModal({isOpen,isClose}) {
  return (
    <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={isClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          {/* <Typography id="transition-modal-title"> */}
            <div className="flex justify-between">
                <h2 className='text-[24px]'>Refferal</h2>
                <CloseIcon fontSize='large'  onClick={isClose} className='cursor-pointer' />
            </div>
          {/* </Typography> */}
          <div className="modal-btn mt-8">
        <ol>
                {numberuser.map((item,id)=>(
                  <>
                  <div key={id} className="flex justify-between py-4">
                  <p>{item.phone}</p>
                  <p>{item.time}</p>
                  </div>
                  <Divider/>
                  </>
                ))}                
            </ol>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
