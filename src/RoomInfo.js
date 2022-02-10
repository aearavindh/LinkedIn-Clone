import { Avatar } from "@mui/material";
import React from "react";
import "./RoomInfo.css";

function RoomInfo({
  profilePic,
  name,
  lastMessage,
  isLastMessageSentByMe,
  timestamp,
}) {
  return (
    <div className="roomInfo">
      <div className="roomInfo__left">
        <Avatar src={profilePic}>{name[0]}</Avatar>
      </div>
      <div className="roomInfo__center">
        <h6>{name}</h6>
        <p>
          {isLastMessageSentByMe ? "You" : name.split(" ")[0]}: {lastMessage}
        </p>
      </div>
      <div className="roomInfo__right">
        <p>{timestamp}</p>
      </div>
    </div>
  );
}

export default RoomInfo;
