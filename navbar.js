import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="heading">Welcome to my blog</h1>
      <div className="links">
        <Link to="/">Blog</Link>
        <Link to="/new">Create</Link>
        <Link to="/temp">Temp</Link> 
      </div>
    </nav>
  );
};

export default Navbar;
