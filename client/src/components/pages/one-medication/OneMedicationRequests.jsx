import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { acceptRequest } from "../../../redux/features/requests";

const useStyles = makeStyles({
  cardWrapper: {
    width: "75%",
    margin: "auto",
    marginBottom: 20,
  },
  card: {
    padding: 20,
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    borderRadius: 10,
  },
  cardSpan: {
    fontSize: 14,
    color: "gray",
  },
  btnAccept: {
    display: "block",
    marginLeft: "auto",
  },
});

const OneMedicationRequests = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const requests = useSelector((state) => state.requests.requests);
  const token = useSelector((state) => state.application.token);

  const handleAccept = (id, medicationId) => {
    dispatch(acceptRequest(id, medicationId));
  };

  if (token) {
    return requests.map((item) => {
      return (
        <Box className={classes.cardWrapper}>
          <Paper className={classes.card}>
            <Typography variant={"h6"}>
              <span className={classes.cardSpan}>Имя: </span>
              {item.name}
            </Typography>

            <Typography>
              <span className={classes.cardSpan}>Сообщение: </span>
              {item.message}
            </Typography>
            <Typography>
              <span className={classes.cardSpan}>Телефон: </span>
              {item.tel}
            </Typography>
            <Typography>
              <span className={classes.cardSpan}>Эл. почта: </span>
              {item.email}
            </Typography>

            <Button
              className={classes.btnAccept}
              variant="contained"
              color={"primary"}
              onClick={() => {
                handleAccept(item._id, item.medicationId);
              }}
              disabled={item.isAccept}
            >
              Принять
            </Button>
          </Paper>
        </Box>
      );
    });
  }

  return <></>;
};

export default OneMedicationRequests;
