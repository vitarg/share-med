import React from "react";
import Logo from "./logo";
import AuthBtn from "./auth-button";
import { AppBarHeader } from "./styles";

const Header = () => {
  return (
    <AppBarHeader position="static">
      <Logo />
      <AuthBtn />
    </AppBarHeader>
  );
};

export default Header;
