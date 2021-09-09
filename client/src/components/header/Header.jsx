import React from "react";
import { AppBar} from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar>
      <Link to={"/"}>Share medication</Link>
      <Link to={"/sign-in"}>Вход для админа</Link>
    </AppBar>
  );
};

export default Header;
