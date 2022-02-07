import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
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
        <Avatar
          className="sidebar__avatar"
          src="https://media-exp1.licdn.com/dms/image/C5603AQEOpwdWjTRq8Q/profile-displayphoto-shrink_400_400/0/1615721046640?e=1649894400&v=beta&t=5xFFzddYj9H4JUfzXQ-34H-6sWFlsyO64on_lIqF2II"
        />
        <h2>AE Aravindh</h2>
        <h4>aearavindh2@gmail.com</h4>
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
