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
function Header() {
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
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQEOpwdWjTRq8Q/profile-displayphoto-shrink_400_400/0/1615721046640?e=1649894400&v=beta&t=5xFFzddYj9H4JUfzXQ-34H-6sWFlsyO64on_lIqF2II"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
