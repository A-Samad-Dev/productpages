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
    <div className="w-full flex justify-between items-center py-4 px-8">
      <Logo />

      <div className="flex items-center gap-10">
        <ul style={{ display: "flex", gap: "10px", alignItems: "center" }}>
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
