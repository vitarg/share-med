import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "../../../assets/icons/medication-logo.svg";

const Logo = () => {
  return (
    <Button component={Link} to={"/"} style={{ fontSize: 20, fontWeight: 700 }}>
      <img src={logo} alt="logo" width={40} style={{ marginRight: 20 }} />
      <span>Share-Med</span>
    </Button>
  );
};

export default Logo;
