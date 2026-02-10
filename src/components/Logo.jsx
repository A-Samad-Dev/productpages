import React from "react";
import { Navigate, useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  function gohome() {
    navigate("/");
  }

  return (
    <div onClick={gohome}>
      <h1>CoHost</h1>
    </div>
  );
};

export default Logo;
