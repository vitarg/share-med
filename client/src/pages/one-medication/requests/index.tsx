import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptRequest } from "../../../store/slices/requests";
import requestsSelectors from "../../../store/selectors/requests";
import appSelectors from "../../../store/selectors/app";
import { Box, Button, Paper, Typography } from "@mui/material";

// const useStyles = {
//   cardWrapper: {
//     width: "75%",
//     margin: "auto",
//     marginBottom: 20,
//   },
//   card: {
//     padding: 20,
//     boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
//     borderRadius: 10,
//   },
//   cardSpan: {
//     fontSize: 14,
//     color: "gray",
//   },
//   btnAccept: {
//     display: "block",
//     marginLeft: "auto",
//   },
//   accepted: {
//     border: "2px solid #38c838ba",
//     position: "relative",
//     "&::before": {
//       position: "absolute",
//       fontSize: 20,
//       right: "50%",
//       transform: "translateX(50%)",
//       top: "40%",
//       color: "green",
//       content: '"Заявка одобрена ✅"',
//       display: "block",
//       width: "auto",
//     },
//   },
// };

const Requests = () => {
  const dispatch = useDispatch();

  const requests = useSelector(requestsSelectors.requests);
  const acceptLoading = useSelector(requestsSelectors.loading);
  const token = useSelector(appSelectors.token);

  const handleAccept = (id: string, medicationId: string) => {
    dispatch(acceptRequest({ id, medicationId }));
  };

  const hasAccepted = requests.find((e) => e.isAccept);

  const disableBtn = hasAccepted || acceptLoading;

  if (token) {
    return (
      <>
        {requests.map((item) => {
          return (
            <Box className={"cardWrapper"}>
              <Paper className={`card ${item.isAccept ? "accepted" : ""}`}>
                <Typography variant={"h6"}>
                  <span className={"cardSpan"}>Имя: </span>
                  {item.name}
                </Typography>

                <Typography>
                  <span className={"cardSpan"}>Сообщение: </span>
                  {item.message}
                </Typography>
                <Typography>
                  <span className={"cardSpan"}>Телефон: </span>
                  {item.tel}
                </Typography>
                <Typography>
                  <span className={"cardSpan"}>Эл. почта: </span>
                  {item.email}
                </Typography>

                <Button
                  className={"btnAccept"}
                  variant="contained"
                  color={"primary"}
                  onClick={() => handleAccept(item._id, item.medicationId)}
                  disabled={Boolean(disableBtn)}
                >
                  Принять
                </Button>
              </Paper>
            </Box>
          );
        })}
      </>
    );
  }

  return <></>;
};

export default Requests;
