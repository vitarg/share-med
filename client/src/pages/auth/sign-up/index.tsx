import React from "react";
import { Link } from "react-router-dom";
import { createAdmin } from "../../../store/slices/application";
import { useDispatch, useSelector } from "react-redux";
import appSelectors from "../../../store/selectors/app";
import { Button, Grid, TextField } from "@mui/material";
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
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

const SignUp = () => {
  const dispatch = useDispatch();

  const [name, setName] = React.useState<string>("");
  const [login, setLogin] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const signingUp = useSelector(appSelectors.signingUp);
  const error = useSelector(appSelectors.error);

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };

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
    dispatch(createAdmin({ name, login, password }));
  };

  return (
    <Auth error={error} handleOnSubmit={handleSubmit} title={"Регистрация"}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => handleChangeName(e)}
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="Имя"
            autoFocus
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            onChange={(e) => handleChangeLogin(e)}
            variant="outlined"
            required
            fullWidth
            id="login"
            label="Логин"
            name="login"
            autoComplete="login"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => handleChangePassword(e)}
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        disabled={signingUp}
        fullWidth
        variant="contained"
        color="primary"
        style={{ marginTop: 16, marginBottom: 16 }}
      >
        Зарегистрироваться
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link
            to="/sign-in"
            style={{ textDecoration: "none", color: "#333", fontSize: 14 }}
          >
            Уже есть аккаунт? <span style={{color: '#5caddc'}}><b>Войти</b></span>
          </Link>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default SignUp;
