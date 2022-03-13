import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Index from "./requests";
import medicationsSelectors from "../../store/medications/selectors";
import appSelectors from "../../store/app/selectors";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { GridContent, ImgBox } from "./styles";
import { getRequests } from "../../store/requests/thunks";
import {
  getMedications,
  removeMedication,
} from "../../store/medications/thunks";
import { dateExpiration } from "../../helpers/dateExpiration";

// const useStyles = makeStyles({

//   itemTxtBottom: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-end",
//   },
//   descr: {
//     flex: "auto",
//   },
//   btnDelete: {
//     width: 140,
//     position: "absolute",
//     right: 0,
//   },
//   requestsTitle: {
//     marginTop: 40,
//     textAlign: "center",
//   },
//   name: {
//     width: "calc(100% - 150px)",
//   },
//   descrSpan: {
//     fontSize: 16,
//     color: "gray",
//   },
//   categorySpan: {
//     fontSize: 14,
//     color: "gray",
//   },
//   divider: {
//     width: "73%",
//     margin: "auto",
//     marginTop: 80,
//   },
// });

const OneMedication: React.FC = () => {
  const dispatch = useDispatch();

  const { id } = useParams<{ id?: string }>();

  const medications = useSelector(medicationsSelectors.medications);
  const loading = useSelector(medicationsSelectors.loading);
  const token = useSelector(appSelectors.token);

  useEffect(() => {
    if (id) {
      dispatch(getRequests({ id }));
    }
    dispatch(getMedications());
  }, [dispatch, id]);

  const find = medications.find((item) => id === item._id);

  const handleDelete = (id: string) => {
    dispatch(removeMedication({ id }));
  };

  if (find) {
    return (
      <>
        <GridContent>
          <Grid item xs={5}>
            <ImgBox>
              <img src={find.img} alt={find.name} style={{ width: "100%" }} />
            </ImgBox>
          </Grid>
          <Grid item xs={7} className={"rightColumn"}>
            {token ? (
              <Button
                className={"btnDelete"}
                component={Link}
                to={"/"}
                variant="contained"
                color="secondary"
                onClick={() => {
                  handleDelete(find._id);
                }}
              >
                Удалить
              </Button>
            ) : (
              ""
            )}

            <Typography
              component="h1"
              variant="h4"
              className={"name"}
              gutterBottom
            >
              {find.name}
            </Typography>

            <Typography>
              <span className={"categorySpan"}>Категория: </span>
              {find.category.name}
            </Typography>

            <Typography component="h1" variant="h5" className={"descr"}>
              <span className={"descrSpan"}>Описание:</span> <br />
              {find.descr}
            </Typography>

            <Box className={"itemTxtBottom"}>
              <Typography>
                {dateExpiration(find.expiryDate)}
              </Typography>

              <Button
                component={Link}
                variant="contained"
                color="primary"
                to={`/requests/${id}`}
              >
                Оставить заявку
              </Button>
            </Box>
          </Grid>
        </GridContent>
        <Box>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              {token ? (
                <>
                  <Divider variant={"middle"} className={"divider"} />
                  <Typography
                    variant={"h4"}
                    gutterBottom
                    className={"requestsTitle"}
                  >
                    Заявки
                  </Typography>
                </>
              ) : (
                ""
              )}
            </>
          )}
          <Index />
        </Box>
      </>
    );
  }

  return <></>;
};

export default OneMedication;
