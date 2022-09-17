import { useState } from "react";
import { Link } from "react-router-dom";
import SearchLogo from "./images/Search-logo.png";
import message from "./images/chat.png";
import notification from "./images/notification.png";
import settings from "./images/gear.png";
import user from "./images/user.png";

const TopNav = () => {
  const [searchValue, setSearchValue] = useState("");
  const data = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="top-nav primary">
      <div className="logo">
        <h2>
          Connect <div>in</div>
        </h2>
      </div>
      <div className="search">
        <div className="search-input">
          <img src={SearchLogo} alt="" />
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="profile">
        <div className="message">
          <img src={message} alt="" />
        </div>
        <div className="notification">
          <img src={notification} alt="" />
        </div>
        <div className="settings">
          <img src={settings} alt="" />
        </div>
        <Link to="/profile">
          <div className="user">
            {/* <img src={data[0].profilePic} alt="" /> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
