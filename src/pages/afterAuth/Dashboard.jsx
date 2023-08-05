import React from "react";
import DashboardCard from "../../components/DashboardCard";
import UserActivity from "../../components/UserActivity";
import RevenuDis from "../../components/RevenuDis";
import GenderRatio from "../../components/GenderRatio";
import AgeCategory from "../../components/AgeCategory";
import UserDistributed from "../../components/UserDistributed";
import UserDisBy from "../../components/UserDisBy";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import NewTicketRaise from "../../components/NewTicketRaise";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        padding: "2rem",
        backgroundColor: "#eaeaea",
        gap: "2rem",
      }}
    >
      <div style={{ width: "70%" }}>
        <div className="card-number flex justify-between">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
        <div className="user-activity h-[478px] mt-[2rem]">
          <UserActivity />
        </div>
        <div className="gender-ratio h-[488px] flex justify-between gap-[2rem] mt-[2rem]">
          <div className="w-[48%] bg-[white] p-[2rem]">
            <p className="font-semibold">Gender ratio</p>
            <GenderRatio />
          </div>
          <div className="w-[48%] bg-[white] p-[2rem]">
            <p className="font-semibold">Age Category</p>
            <AgeCategory />
          </div>
        </div>
        <div className="new-ticket-raise bg-[white] mt-[2rem] p-[2rem]">
          <div className="questionaire-title flex justify-between pb-4">
            <p className="text-[20px] font-semibold">New ticket raised</p>
            <p
              onClick={() => navigate("/help-desk")}
              className="cursor-pointer text-[#FF6B6B]"
            >
              {" "}
              View more
              <span>
                <ChevronRightIcon />
              </span>{" "}
            </p>
          </div>
          <NewTicketRaise />
        </div>
      </div>
      <div className="w-[30%] rounded ">
        <div className="revenu-section bg-white p-4 h-[684px]">
          <p className="font-semibold text-center">
            Revenue distributed by continent
          </p>
          <RevenuDis />
        </div>
        <div className="user-distributed h-[488px] mt-[2rem]">
          <div className="user-dis p-[2rem] bg-[white]">
            <p className="font-semibold">Users distributed by continent</p>
            <UserDistributed value="20" />
            <UserDistributed value="60" />
            <UserDistributed value="70" />
            <UserDistributed value="45" />
            <UserDistributed value="50" />
            <UserDistributed value="34" />
          </div>
        </div>
        <div className="user-distributed-content mt-[2rem]">
          <div className="user-dis p-[2rem] bg-[white] ">
            <p className="font-semibold">Users distributed by continent</p>
            <div className="flex justify-center">
              <UserDisBy />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
