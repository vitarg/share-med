import React from "react";
import Logo from "./logo";
import AuthBtn from "./auth-button";
import { AppBarHeader } from "./styles";

const Header = () => {
  return (
    <AppBarHeader>
      <Logo />
      <AuthBtn />
    </AppBarHeader>
  );
};

export default Header;
