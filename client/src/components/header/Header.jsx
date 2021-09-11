import React from "react";
import { AppBar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const token = useSelector((state) => state.application.token);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <AppBar position={"static"}>
      <Link to={"/"}>Share medication</Link>
      {token ? (
        <Button variant={"contained"} onClick={handleLogout}>
          Выйти
        </Button>
      ) : (
        <Link to={"/sign-in"}>Войти как админ</Link>
      )}
    </AppBar>
  );
};

export default Header;
