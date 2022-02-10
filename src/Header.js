import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  SupervisorAccount,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import {CgMenuGridR} from "react-icons/cg";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" active />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          arrow
          avatar
          title="Me"
          onClick={logoutOfApp}
        />
      </div>
      <div className="header__rightCorner">
        <HeaderOption Icon={CgMenuGridR} title="Work" arrow />
          <p>{`Try Premium for \n free`}</p>
      </div>
    </div>
  );
}

export default Header;
