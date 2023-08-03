import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HelpDeskRow() {
  const navigate=useNavigate()
  return (
    <div>
      <div className="path-transaction flex p-4">
        <p className="text-[#B7B7B7] cursor-pointer" onClick={()=>navigate('/help-desk')}>Help Desk / </p>
        <span className="text-[#6F6F6F]">Akash Srivastav</span>
      </div>
      <div className="user-query-head bg-[#F3F3F3] p-8">
        <div className="query-head bg-[white] px-8 pt-8">
          <p className="text-[28px]">User Query</p>
        </div>
        <div className="flex gap-8 bg-white p-8">
          <div className="message-write w-[70%] bg-[#F3F3F3] p-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ullam
              alias consequatur rem tempore quisquam aperiam eum soluta incidunt
              tempora? Velit consequatur magni maxime saepe dolorum quae
              quibusdam facilis nihil?
            </p>
          </div>
          <div className="user-profile w-[30%] bg-[#F3F3F3]">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000"
              alt="logo"
            />
            <div className="main-profile-dels flex justify-between p-8">
            <div className="user-profile-details">
              <div>
              <p>Name</p>
              <p>Masum Reza</p>
              </div>
              <div className="py-8">
              <p>Phone Number</p>
              <p>+91 9800141571</p>
              </div>
              <div>
              <p>Country</p>
              <p>India</p>
              </div>
            </div>
            <div className="user-profile-details">
              <div>
              <p>Age</p>
              <p>23</p>
              </div>
              <div className="py-8">
              <p>gender</p>
              <p>Male</p>
              </div>
              <div>
              <p>Date of birth</p>
              <p>09/09/9999</p>
              </div>
            </div>
            </div>
            <Button variant="outlined" id="viewprofile-btn" onClick={()=>navigate('/user-management-row')}>View profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
