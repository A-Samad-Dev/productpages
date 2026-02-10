import React, { useState } from "react";
import Logo from "./logo";
import { Button } from "./button";
import "./Navbar.css";
import { NavLink } from "react-router";

const Navbar = () => {
  // console.log('Users from navbar.jsx', users);
  const [student, setstudent] = useState([]);
  // setstudent(users)
  const styleName = {
    borderRadius: "4px",
  };
  return (
    <div className="Navbar">
      <Logo />

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <ul>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-amber-200"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-amber-200"
            }
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-amber-200"
            }
            to="/product"
          >
            Products
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-amber-200"
            }
            to="/d"
          >
            {" "}
            Hosting
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-amber-200"
            }
            to="/s"
          >
            Blog
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-amber-200"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
        <Button text="Get Started" customBorder={styleName.borderRadius} />
      </div>
    </div>
  );
};

export default Navbar;
