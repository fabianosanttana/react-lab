import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  console.count("Navbar rendered");

  const navbarStyle: React.CSSProperties = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
  };

  const navbarMenuStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: "10px",
  };

  return (
    <header style={navbarStyle}>
      <h1>Navbar</h1>
      <div style={navbarMenuStyle}>
        <NavLink to="/">
          <p>Rendering</p>
        </NavLink>
        <NavLink to="/hooks">
          <p>Hooks</p>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;