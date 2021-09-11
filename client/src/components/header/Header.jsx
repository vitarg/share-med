import React from "react";
import { AppBar, Button, CardMedia, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
  },
  appbar: {
    background: "#fff",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logout: {
    width: 130,
    height: 40,
  },
  login: {
    height: 40,
  },
  logo: {
    marginRight: 20,
  },
}));

const Header = () => {
  const classes = useStyles();

  const token = useSelector((state) => state.application.token);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <AppBar className={classes.appbar}>
      <Button component={Link} to={"/"} className={classes.title}>
        <img
          src="https://image.flaticon.com/icons/png/512/883/883407.png"
          alt="logo"
          width={40}
          className={classes.logo}
        />
        <span>Share medication</span>
      </Button>
      {token ? (
        <Button
          className={classes.logout}
          variant={"outlined"}
          color={"secondary"}
          onClick={handleLogout}
        >
          Выйти
        </Button>
      ) : (
        <Button
          className={classes.login}
          component={Link}
          to={"/sign-in"}
          variant={"outlined"}
          color={"secondary"}
        >
          Войти как админ
        </Button>
      )}
    </AppBar>
  );
};

export default Header;
