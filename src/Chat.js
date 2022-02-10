import { ExpandLess, ExpandMore, MoreHoriz } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import { selectUser } from "./features/userSlice";
import { FaEdit } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Search from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import RoomInfo from "./RoomInfo";

function Chat() {
  const [active, setActive] = useState(false);
  const user = useSelector(selectUser);

  const toggleChat = () => {
    setActive(!active);
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <FiberManualRecordIcon fontSize="small" color="success" />
            }
          >
            <Avatar fontSize="small" src={user.photoURL}>
              {user?.displayName[0]}
            </Avatar>
          </Badge>
          <h5>Messaging</h5>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <MoreHoriz />
          </IconButton>
          <IconButton>
            <FaEdit color="gray" />
          </IconButton>
          <IconButton onClick={toggleChat}>
            {active ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        </div>
      </div>
      {active && (
        <div className="chat__body">
          <div className="chat__search">
            <Search />
            <input type="text" placeholder="Search messages" />
            <IconButton disableRipple>
              <MenuIcon />
            </IconButton>
          </div>
          <div className="chat_rooms">
            <RoomInfo
              profilePic="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
              name="Elon Musk"
              isLastMessageSentByMe
              lastMessage="Hi Musk! How are you?"
              timestamp="8:11 PM"
            />
            <RoomInfo
              profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvp8NhpQNyMKvqZ0LSLaTWqtPxc8_5to_iA&usqp=CAU"
              name="Virat Kohli"
              lastMessage="You need to remove Dogecoin"
              timestamp="Feb 9"
            />
            <RoomInfo
              profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGD_UM4u8U6ksDgkoZ7Za_H8G38GjEuthdZQ&usqp=CAU"
              name="MS Dhoni"
              isLastMessageSentByMe
              lastMessage="How about Ether?"
              timestamp="Jan 31"
            />
            <RoomInfo
              profilePic="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ21dCAz7ZagwiwjBqCKcgyE1mQbrEwxYJw9Npwg5iRX0aok3UKaFNnA9nbJLAK"
              name="Rahul Dravid"
              lastMessage="Hi Aravindh! How are you?"
              timestamp="Jan 21"
            />
            <RoomInfo
              profilePic="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTLO6mzbNcykX9Eh-lcYRhv7aaPmGfSha2ti2tp6rEa2hpPsC0"
              name="Harry Styles"
              isLastMessageSentByMe
              lastMessage="You need to tweet more"
              timestamp="Jan 1"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
