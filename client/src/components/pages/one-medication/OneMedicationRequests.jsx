import React, { useEffect } from "react";
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
import medications from "../../../redux/features/medications";
import {fetchRequestGet} from "../../../redux/features/requests";
import { useParams } from "react-router";

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
  accepted: {
    border: "2px solid #38c838ba",
    position: "relative",
    "&::before": {
      position: "absolute",
      fontSize: 20,
      right: "50%",
      transform: "translateX(50%)",
      top: "40%",
      color: "green",
      content: '"Заявка одобрена ✅"',
      display: "block",
      width: "auto",
    },
  },
});

const OneMedicationRequests = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const requests = useSelector((state) => state.requests.requests);
  const acceptLoading = useSelector((state) => state.requests.acceptLoading);
  const token = useSelector((state) => state.application.token);

  const handleAccept = (id, medicationId) => {
    dispatch(acceptRequest(id, medicationId));
  };

  const hasAccepted = requests.find((e) => e.isAccept);

  const disableBtn = hasAccepted || acceptLoading;

  if (token) {
    return requests.map((item) => {
      return (
        <Box className={classes.cardWrapper}>
          <Paper
            className={`${classes.card} ${
              item.isAccept ? classes.accepted : ""
            }`}
          >
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
              onClick={() => handleAccept(item._id, item.medicationId)}
              disabled={disableBtn}
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
