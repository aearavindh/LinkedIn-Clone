import { ArrowDropDown } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <div className="headerOption__text">
        <h3 className="headerOption__title">{title}</h3>
        {avatar && <ArrowDropDown />}
      </div>
    </div>
  );
}

export default HeaderOption;
