import { Create } from "@mui/icons-material";
import React from "react";
import "./Feed.css";

function Feed() {
  return <div className="feed">
      <div className="feed__inputContainer">
          <div className="feed_input">
              <Create />
              <form>
                  <input type="text" />
              </form>
          </div>
      </div>
  </div>;
}

export default Feed;
