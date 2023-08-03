import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
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

const questionaireArr=[
  { 
    id:1,
    quetion:"I enjoy spending my weekends outdoors, hiking, and exploring nature.",
  },
  { 
    id:2,
    quetion:"I enjoy spending my weekends outdoors, hiking, and exploring nature.",
  },
  { 
    id:3,
    quetion:"I enjoy spending my weekends outdoors, hiking, and exploring nature.",
  },
  { 
    id:4,
    quetion:"I enjoy spending my weekends outdoors, hiking, and exploring nature.",
  }
]

export default function ViewmoreModal({isOpen,isClose}) {
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
                  <h2 className='text-[24px]'>Questionaire</h2>
                  <CloseIcon fontSize='large'  onClick={isClose} className='cursor-pointer' />
              </div>
            {/* </Typography> */}
            <div className="modal-btn mt-8">
            <ol>
              {questionaireArr.map((item,id)=>(
                <li key={id} className="mb-3 py-2 bg-[#F9F9F9]">{item.quetion}</li>
              ))}
            </ol>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}