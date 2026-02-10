import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Landing;
