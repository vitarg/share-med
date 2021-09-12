import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  logout: {
    width: 130,
    height: 40,
  },
  login: {
    height: 40,
  },
}));

const LoginLogoutButton = () => {
  const classes = useStyles();

  const token = useSelector((state) => state.application.token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    document.location.reload();
  };

  if (token) {
    return (
      <Button
        className={classes.logout}
        variant={"outlined"}
        color={"secondary"}
        onClick={handleLogout}
      >
        Выйти
      </Button>
    );
  } else {
    return (
      <Button
        className={classes.login}
        component={Link}
        to={"/sign-in"}
        variant={"outlined"}
        color={"secondary"}
      >
        Войти как админ
      </Button>
    );
  }
};

export default LoginLogoutButton;
