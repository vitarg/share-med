import React from "react";
import { AppBar, Button, makeStyles } from "@material-ui/core";
import HeaderLogo from "./HeaderLogo";
import LoginLogoutButton from "./LoginLogoutButton";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#fff",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position={"static"} className={classes.appbar}>
      <HeaderLogo />
      <LoginLogoutButton />
    </AppBar>
  );
};

export default Header;
