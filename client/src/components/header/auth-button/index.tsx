import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthButton } from "./styles";

const AuthBtn = () => {
  const token = useSelector((state) => state.application.token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    document.location.reload();
  };

  if (token) {
    return (
      <AuthButton
        variant={"outlined"}
        color={"secondary"}
        onClick={handleLogout}
      >
        Выйти
      </AuthButton>
    );
  } else {
    return (
      <AuthButton
        component={Link}
        to={"/sign-in"}
        variant={"outlined"}
        color={"secondary"}
      >
        Войти как админ
      </AuthButton>
    );
  }
};

export default AuthBtn;
