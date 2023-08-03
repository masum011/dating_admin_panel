import { Outlet } from "react-router-dom";
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import GroupIcon from "@mui/icons-material/Group";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useState } from "react";
import LogoutModal from "../components/LogoutModal";
import NotificationsDeshboard from "../components/NotificationsDeshboard";

export default function RootLayout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [notify,setNotify]=useState(false); 
  const handleopennotify=()=>setNotify(!notify)
  // const handleclosenotify=()=>setNotify(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100vw",
          zIndex: "20",
          backgroundColor: "white",
        }}
      >
        <div
          className="header-top-bar flex justify-between p-4"
          style={{
            border: "1px solid #CAC9C94D",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
        >
          <div className="text-left text-2xl" style={{ lineHeight: 1 }}>
            <p>
              some<span className="text-[#FF6B6B]">one</span>
              <br />
              <SsidChartIcon sx={{ color: "#FF6B6B" }} />
              likeme
            </p>
          </div>
          <div className="user-login-right flex gap-4">
            <div
              className="h-[3rem] w-[3rem] m-[auto] cursor-pointer"
              style={{ border: "1px solid #CAC9C94D", borderRadius: "50rem" }}
              onClick={handleopennotify}
            >
              <span className="px-3 mt-[4px]">
                <NotificationsActiveIcon sx={{ marginTop: "0.7rem" }} />
              </span>
            </div>
            <div
              className="login-avtar flex gap-2"
              style={{ border: "1px solid #CAC9C94D", borderRadius: "50rem" }}
            >
              <AccountCircleIcon className="m-[auto]" fontSize="large" />
              <div className="text-[14px]">
                <p className="text-[16px]">Siddhant</p>
                <p className="text-[#8C8C8C]">
                  Admin <span>3Hr</span>
                </p>
              </div>
              <KeyboardArrowDownIcon fontSize="large" className="m-[auto]" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="root-layout"
        style={{ display: "flex", marginTop: "5.3rem" }}
      >
        <header>
          <Sidebar style={{ height: "90vh", width: "17vw" }}>
            <Menu className="mt-[2rem]">
              <MenuItem
                active={location.pathname === "/"}
                className="sidenav-item"
                icon={<GridViewIcon />}
                component={<Link to="/" />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                active={location.pathname === "/user-management"}
                className="sidenav-item"
                icon={<GroupIcon />}
                component={<Link to="/user-management" />}
              >
                User Management
              </MenuItem>
              <MenuItem
                active={location.pathname === "/transaction-history"}
                className="sidenav-item"
                icon={<CreditCardIcon />}
                component={<Link to="/transaction-history" />}
              >
                Transaction History
              </MenuItem>
              <MenuItem
                active={location.pathname === "/content-management"}
                className="sidenav-item"
                icon={<ConnectWithoutContactIcon />}
                component={<Link to="/content-management" />}
              >
                Content Management
              </MenuItem>
              <MenuItem
                active={location.pathname === "/help-desk"}
                className="sidenav-item"
                icon={<HelpOutlineIcon />}
                component={<Link to="/help-desk" />}
              >
                Help Desk
              </MenuItem>
              <MenuItem icon={<ExitToAppIcon />} onClick={handleOpen}>
                Sign Out
              </MenuItem>
            </Menu>
          </Sidebar>
        </header>
        <main style={{ width: "83vw" }}>
          <Outlet />
        </main>
      </div>
      <LogoutModal isOpen={open} isClose={handleClose} />
      <NotificationsDeshboard isOpen={notify}/>
    </>
  );
}
