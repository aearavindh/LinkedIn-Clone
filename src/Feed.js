import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = e => {
      e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F7" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {posts.map((post) => (
        <Post />
      ))}

      <Post
        name="AE Aravindh"
        description="Software Engineer"
        message="Hey there! It's me"
        photoUrl="https://media-exp1.licdn.com/dms/image/C5603AQEOpwdWjTRq8Q/profile-displayphoto-shrink_400_400/0/1615721046640?e=1649894400&v=beta&t=5xFFzddYj9H4JUfzXQ-34H-6sWFlsyO64on_lIqF2II"
      />
    </div>
  );
}

export default Feed;
