import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const Logo = () => {
  return (
    <Button component={Link} to={"/"} style={{ fontSize: 20 }}>
      <img
        src="https://image.flaticon.com/icons/png/512/883/883407.png"
        alt="logo"
        width={40}
        style={{ marginRight: 20 }}
      />
      <span>Share medication</span>
    </Button>
  );
};

export default Logo;
