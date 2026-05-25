import React, { useState } from "react";
import { EllipsisVertical, Menu, Mic, Search, UserCircle2 } from "lucide-react";
import "./Navbar.css"

const Navbar = ({ sidebar, setSidebar }) => {
  const [Query, setQuery] = useState("");
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-left">
          <Menu className="menu-icon" onClick={() => setSidebar(!sidebar)} />

          <img className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube"
          />
        </div>

        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="search"
              value={Query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchVideos()}
            />
            <button className="search-btn" >
              <Search size={20} />
            </button>

            <button className="mic-btn">
                <Mic size={20}/>
            </button>
          </div>
        </div>


        <div className="nav-right">
          <EllipsisVertical className="dots" />
          <button className="signin-btn">
            <UserCircle2 size={20} />
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
