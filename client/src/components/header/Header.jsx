import React from "react";
import { AppBar, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.application.token);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <AppBar position={"static"}>
      <Box>
        <Button component={Link} to={"/"}>
          Share medication
        </Button>
      </Box>
      {token ? (
        <Box>
          <Button variant={"contained"} onClick={handleLogout}>
            Выйти
          </Button>
        </Box>
      ) : (
        <Box>
          <Link to={"/sign-in"}>Войти как админ</Link>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
