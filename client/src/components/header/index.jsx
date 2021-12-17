import React from "react";
import { AppBar, makeStyles } from "@material-ui/core";
import Logo from "./logo";
import AuthBtn from "./auth-button";
import { appbar } from "./styles";

const useStyles = makeStyles((theme) => ({
  appbar,
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Logo />
      <AuthBtn />
    </AppBar>
  );
};

export default Header;
