import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "814px",
  height:"228px",
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  
  boxShadow: 24,
  p: 4,
  borderRadius:"16px",
};

export default function LogoutModal({isOpen,isClose}) {
    const navigate=useNavigate()
    const handlesignOut=()=>{
      localStorage.removeItem('token');
      navigate('/login')
    }
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
            <Typography id="transition-modal-title">
            Do you want to sign out ?
            </Typography>
            <Divider/>
            <div className="modal-btn flex justify-center gap-12 mt-8">
            <Button variant='outlined' onClick={isClose} id='modal-btn' sx={{color:"#979797",border: '1px solid #DBDBDB'}}>No</Button>
            <Button variant='contained' color='warning'  id='modal-btn' sx={{backgroundColor:"#FF6B6B"}} onClick={handlesignOut}>Yes</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}