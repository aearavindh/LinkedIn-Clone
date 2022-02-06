import React from "react";
import "./Header.css";

function Header() {
  return <div className="header">
      <h1>This is Header</h1>
      <div className="header__left">

      </div>
      <div className="header__right">
          <img src="" alt="" />
          <div className="header__search">
              {/* Search Icon */}
              <input type="text" />
          </div>
      </div>
  </div>;
}

export default Header;
