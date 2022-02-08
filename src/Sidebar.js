import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5616AQGwy3leKcZjuw/profile-displaybackgroundimage-shrink_350_1400/0/1626248661594?e=1649894400&v=beta&t=9pFhTkIwno3r0RJa8hRLPlLa1ecTemVW_R19srAvcvU"
          alt="Background"
        />
        <Avatar className="sidebar__avatar" src={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">56</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="sidebar__statNumber">2,125</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("javascript")}
        {recentItem("machinelearning")}
        {recentItem("programming")}
        {recentItem("blockchain")}
        {recentItem("microservices")}
      </div>
    </div>
  );
}

export default Sidebar;
