import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
  },
  logo: {
    marginRight: 20,
  },
}));

const HeaderLogo = () => {
  const classes = useStyles();
  return (
    <Button component={Link} to={"/"} className={classes.title}>
      <img
        src="https://image.flaticon.com/icons/png/512/883/883407.png"
        alt="logo"
        width={40}
        className={classes.logo}
      />
      <span>Share medication</span>
    </Button>
  );
};

export default HeaderLogo;
