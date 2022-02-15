import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addRequest } from "../../store/features/requests";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Root } from "./styles";

const AddRequest = () => {
  const { medicationId } = useParams<{ medicationId?: string }>();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  const sendRequest = () => {
    if (name === "" || tel === "" || message === "" || email === "") {
      return setText("Вы не заполнили все поля");
    } else if (email.indexOf("@") === -1 || email[0] === "@") {
      return setText("Email введен неверно");
    } else {
      if (medicationId) {
        dispatch(addRequest({ medicationId, name, tel, email, message }));
      }
      setText("Заявка успешно отправлена");
    }
  };

  return (
    <Root>
      <Paper elevation={3}>
        <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
          Заявка на лекарство
        </Typography>
        <Grid
          container
          spacing={3}
          justifyContent={"center"}
          style={{ marginTop: 20 }}
        >
          <Grid item xs={12} sm={8}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Имя"
              fullWidth
              autoComplete="given-name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              required
              id="Number"
              name="Number"
              label="Телефон"
              fullWidth
              type={"tel"}
              onChange={(e) => setTel(e.target.value)}
              value={tel}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              type={"email"}
              required
              id="address"
              name="address"
              label="Эл. почта"
              fullWidth
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              id="filled-multiline-static"
              label="Почему вам нужно это лекарство?"
              multiline
              rows={5}
              fullWidth
              variant={"outlined"}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Button variant="contained" color="primary" onClick={sendRequest}>
              Отправить запрос
            </Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            {text}
          </Grid>
        </Grid>
      </Paper>
    </Root>
  );
};

export default AddRequest;
