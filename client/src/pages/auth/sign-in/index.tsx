import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import appSelectors from "../../../store/app/selectors";
import { signIn } from "../../../store/app/slice";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Auth from "../index";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%",
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

const SignIn = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signingIn = useSelector(appSelectors.signingIn);
  const error = useSelector(appSelectors.error);

  const handleChangeLogin = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(signIn({ login, password }));
  };

  return (
    <Auth title={"Авторизация"} handleOnSubmit={handleSubmit} error={error}>
      <TextField
        onChange={(e) => handleChangeLogin(e)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="login"
        label="Логин"
        name="login"
        autoComplete="login"
        autoFocus
      />
      <TextField
        onChange={(e) => handleChangePassword(e)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Пароль"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Typography>{error}</Typography>
      <Button
        disabled={signingIn}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Войти
      </Button>
      <Grid container>
        <Grid item>
          <Link to={"/sign-up"}>Зарегистрироваться</Link>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default SignIn;
