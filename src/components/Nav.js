import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="sidebar">
        <div className="top-left">
        <li >
            <Link to="/" className="navlink">
                <h3> 🏠 Home </h3>
            </Link>
        </li>
        <li >
            <Link to="/create" className="navlink">
                <h3> ❤️️ Create </h3>
            </Link>
        </li>
        <li >
            <Link to="/gallery" className="navlink">
                <h3> ⭐ Gallery </h3>
            </Link>
        </li>
        </div>
        <div className="bottom-left">
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/peeking.7c0ab599.png" width="200px" alt="icon" />
        </div>
    </div>
  );
};

export default Nav;
