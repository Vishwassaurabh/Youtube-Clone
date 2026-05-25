import React from "react";
import "./Sidebar.css";
import {
  Film,
  Home,
  History,
  Music,
  ShoppingBag,
  UserCircle,
  UserCircle2,
  ChevronDown,
  Clapperboard,
  Flame,
  FlagIcon,
} from "lucide-react";

const Sidebar = ({ sidebar }) => {
  return (
    <aside className={`sidebar ${sidebar ? "show-sidebar" : ""}`}>
      <a href="/">
        <Home size={20} />
        <span>Home</span>
      </a>

      <a href="/">
        <Clapperboard size={20} />
        <span>Shorts</span>
      </a>

      <a href="/">
        <Flame size={20} />
        <span>Subscriptions</span>
      </a>

      <a href="/">
        <UserCircle size={20} />
        <span>You</span>
      </a>

      <a href="/">
        <History size={20} />
        <span>History</span>
      </a>

      <hr />

      <h4>Sign in to like videos, comment and subscribe.</h4>

      <button className="signin-side-btn">
        <UserCircle2 size={20} />
        Sign In
      </button>

      <hr />

      <h3>Explore</h3>

      <a href="/">
        <ShoppingBag size={20} />
        <span>Shopping</span>
      </a>

      <a href="/">
        <Music size={20} />
        <span>Music</span>
      </a>

      <a href="/">
        <Film size={20} />
        <span>Films</span>
      </a>

      <a href="/">
        <ChevronDown size={20} />
        <span>Show More</span>
      </a>

      <hr />

      <h3>More from YouTube</h3>

      <a href="/">
        <Flame size={20} />
        <span>YouTube Premium</span>
      </a>

      <a href="/">
        <Music size={20} />
        <span>YouTube Music</span>
      </a>

      <a href="/">
        <Clapperboard size={20} />
        <span>YouTube Kids</span>
      </a>

      <hr />

      <a href="/">
        <FlagIcon size={20} />
        <span>Report History</span>
      </a>
    </aside>
  );
};

export default Sidebar;
