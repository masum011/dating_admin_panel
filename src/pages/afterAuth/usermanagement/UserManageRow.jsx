import React, { useState } from "react";
import { Box, Button, Divider } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../../assets/images/usermanagement/WhatsAppimg.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ViewmoreModal from "../../../components/ViewmoreModal";
import PaymentDetails from "../../../components/PaymentDetails";
import RefferalModal from "../../../components/RefferalModal";
import UserManageTime from "../../../components/UserManageTime";
import UsermanQueryR from "../../../components/UsermanQueryR";

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
  },
  { 
    id:4,
    quetion:"I enjoy spending my weekends outdoors, hiking, and exploring nature.",
  },
  { 
    id:5,
    quetion:"I enjoy spending my weekends outdoors, hiking, and exploring nature.",
  },
  { 
    id:6,
    quetion:"I enjoy spending my weekends outdoors, hiking, and exploring nature.",
  },
  { 
    id:7,
    quetion:"I enjoy spending my weekends outdoors, hiking, and exploring nature.",
  },
]
const numberuser=[
  {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
  {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
  {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
  {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
  {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
  {phone: '+91 9800141572',time:"11:30 PM, 12 May 2023"},
]
export default function UserManageRow() {
  const navigate=useNavigate()
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);


  return (
    <>
      <div className="path-user flex gap-2 py-2 pl-8">
        <p className="text-[#B7B7B7] cursor-pointer" onClick={()=>navigate('/user-management')}>User Management / </p>{" "}
        <span> Akash Srivastav</span>
      </div>
      <div className="parent-usermg-div flex bg-[#eaeaea]">
            <Box sx={{ width: value==='3' ? '100%' : '70%', typography: "body1",backgroundColor:"white",margin:"2rem" }}> 
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    paddingTop:"0.5rem",
                    color: "#FF6B6B",
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label="Profile Detail"
                      id="tablist"
                      value="1"
                      sx={{ textTransform: "none" }}
                    />
                    <Tab
                      label="Use time"
                      id="tablist"
                      value="2"
                      sx={{ textTransform: "none" }}
                    />
                    <Tab
                      label="Query Raised"
                      id="tablist"
                      value="3"
                      sx={{ textTransform: "none" }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                <div className=" bg-white w-[100%] px-4">
          <div className="user-m-table">
                  <div className="general-details flex justify-between">
                    <p className="text-[20px] font-semibold">General Details</p>
                    <div className="flex gap-4">
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ textTransform: "none", borderRadius: "83px" }}
                      >
                        Suspend ID
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ textTransform: "none", borderRadius: "83px" }}
                      >
                        Remove ID
                      </Button>
                    </div>
                  </div>
                  <div className="img-section flex gap-4 py-4">
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                  </div>
                  <div className="user-bio-section w-[80%] flex justify-between py-4">
                    <div className="name">
                      <p>Name</p>
                      <p className="value-item">Masum Reza</p>
                      <div className="name pt-8">
                        <p>Country</p>
                        <p className="value-item">India</p>
                      </div>
                    </div>
                    <div className="age">
                      <p>Age</p>
                      <p className="value-item">23</p>
                      <div className="age pt-8">
                        <p>Pronoun</p>
                        <p className="value-item">He/Him</p>
                      </div>
                    </div>
                    <div className="mobile">
                      <p>Mobile Number</p>
                      <p className="value-item">+91 8001415621</p>
                      <div className="mobile pt-8">
                        <p>Date of birth</p>
                        <p className="value-item">04-12-2000</p>
                      </div>
                    </div>
                    <div className="gender">
                      <p>Gender</p>
                      <p className="value-item">Male</p>
                      <div className="gender pt-8">
                        <p>Continent</p>
                        <p className="value-item">Asia</p>
                      </div>
                    </div>
                  </div>

                  <div className="other-details w-[80%]">
                    <p className="text-[20px] py-4 font-semibold">Other Details</p>
                    <div className="social-title flex justify-between">
                      <div className="w-[60%]">
                        <p className="value-item">Bio</p>
                        <p>
                          Adventure-seeking traveler who loves exploring new
                          cultures and cuisines.
                        </p>
                      </div>
                      <div>
                        <p className="value-item">Social</p>
                        <FacebookIcon fontSize="large" color="primary"/>
                        <InstagramIcon fontSize="large" color="primary"/>
                      </div>
                    </div>
                      <div className="w-[60%] py-8">
                        <p className="value-item">Interest</p>
                        <div className="interest-value py-3 flex flex-wrap gap-4">
                          <p className="interest-item py-1"><span><QueueMusicIcon/></span> Music</p>
                          <p className="interest-item py-1">Music</p>
                          <p className="interest-item py-1">Music</p>
                          <p className="interest-item py-1">Music</p>
                        </div>
                      </div>
                  </div>
                      <div className="questionaire-section">
                        <div className="questionaire-title flex justify-between">
                        <p className="text-[20px] font-semibold">Questionaire</p>
                        <p onClick={handleOpen} className="cursor-pointer">View more <span><ChevronRightIcon/></span></p>
                        </div>
                        <div className="quetion-content py-4">
                          <ol>
                            {questionaireArr.map((item,id)=>(
                              <li key={id} className="mb-3 py-2 bg-[#F9F9F9]">{item.quetion}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                      </div>
                      </div>

                </TabPanel>
                <TabPanel value="2">
                  <UserManageTime/>
                </TabPanel>
                <TabPanel value="3">
                  <div >
                     <UsermanQueryR/>
                  </div>

                </TabPanel>
              </TabContext>
            </Box>
          {/* </div>
        </div> */}

        {value==='3' ? ' ' : <>
        <div className="face-identification py-[2rem] pr-[2rem] bg-[#eaeaea] w-[30%]">
          <div className="bg-white p-4 mb-[2rem]">
            <p className="text-[20px] font-semibold">Face Identification</p>
            <img src={img} className="pt-4" alt="whasssup" />
          </div>
          <div className="payment-section bg-white mb-[2rem]">
            <PaymentDetails/>
          </div>
          <div className="Refferal-section p-4 bg-white">
            <div className="refferal-title flex justify-between mb-4">
              <p className="font-semibold text-[20px]">Refferal (10)</p>
              <p onClick={handleOpen1} className="cursor-pointer">View more <span><ChevronRightIcon/></span></p>
            </div>
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
        </div>
        </>}

      </div>
      <ViewmoreModal isOpen={open} isClose={handleClose}  />
      <RefferalModal isOpen={open1} isClose={handleClose1} />
    </>
  );
}
