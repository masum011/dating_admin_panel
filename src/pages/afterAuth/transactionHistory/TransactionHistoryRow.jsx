import { MenuItem, Select, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
export default function TransactionHistoryRow() {
  const [age1, setAge1] = useState(10);
  const handledownload = (e) => {
    setAge1(e.target.value);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="path-transaction flex p-4">
        <p
          className="text-[#B7B7B7] cursor-pointer"
          onClick={() => navigate("/transaction-history")}
        >
          Transaction history /{" "}
        </p>{" "}
        <span className="text-[#6F6F6F]">Akash Srivastav</span>
      </div>
      <div className="transaction-user bg-[#F3F3F3] p-8">
        <div className="transaction-user-head bg-[white] ">
          <div className="p-8 flex justify-between">
            <div className="user-head">
              <p className="text-[28px]">Akash Srivastav</p>
            </div>
            <div className="download-pdf">
              <Select
                value={age1}
                onChange={handledownload}
                size="small"
                startAdornment={
                  <InputAdornment position="start">
                    <DownloadIcon fontSize="small" />
                  </InputAdornment>
                }
                sx={{ borderRadius: "8px", width: "14rem" }}
              >
                <MenuItem value={10}>Download invoice</MenuItem>
                <MenuItem value={20}>View invoice</MenuItem>
                <MenuItem value={30}>Download invoice</MenuItem>
              </Select>
            </div>
          </div>
          <div className="transaction-user-content flex justify-between p-8">
            <div>
              <p className="text-[#878787]">Transaction ID </p>
              <p>23456787656789876</p>
            </div>
            <div>
              <p className="text-[#878787]">Paid from</p>
              <p>XX4271</p>
            </div>
            <div>
              <p className="text-[#878787]"> Paid to</p>
              <p>Razorpay payment</p>
            </div>
            <div>
              <p className="text-[#878787]">Date</p>
              <p>11:30 PM, 12 May 2023</p>
            </div>
          </div>
          <div className="continent w-[65%] px-8">
            <p className="text-[28px] py-4 ">Continent</p>
            <div className="flex justify-between">
              <p>Europe</p>
              <hr className="w-[80%] my-3" />
              <p>
                <CurrencyRupeeIcon fontSize="" /> 81.00
              </p>
            </div>
            <div className="flex justify-between py-4">
              <p>Europe</p>
              <hr className="w-[80%] my-3" />
              <p>
                <CurrencyRupeeIcon fontSize="" /> 81.00
              </p>
            </div>
            <hr className="" />
            <div className="path-amount flex justify-between py-4">
              <p>paid Amount</p>
              <p>
                <CurrencyRupeeIcon fontSize="" /> 181.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
