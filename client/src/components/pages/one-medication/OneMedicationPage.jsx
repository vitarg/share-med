import {
  Grid,
  Typography,
  Button,
  CircularProgress,
  CardMedia,
  Box,
  makeStyles,
  Divider,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMedications } from "../../../redux/features/medications";
import { Link } from "react-router-dom";
import { fetchRequestGet } from "../../../redux/features/requests";
import { removeMedication } from "../../../redux/features/medications";
import OneMedicationRequests from "./OneMedicationRequests";

const useStyles = makeStyles({
  leftColumn: {
    display: "flex",
    justifyContent: "center",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    margin: "auto",
    marginTop: 40,
    width: "75%",
    position: "relative",
  },
  imgBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 350,
    backgroundColor: "#e5e5e5",
    background: "url('/no-pictures.svg') center center/30% no-repeat",
  },
  image: {
    width: "100%",
  },
  itemTxtBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  descr: {
    flex: "auto",
  },
  btnDelete: {
    width: 140,
    position: "absolute",
    right: 0,
  },
  requestsTitle: {
    marginTop: 40,
    textAlign: "center",
  },
  name: {
    width: "calc(100% - 150px)",
  },
  descrSpan: {
    fontSize: 16,
    color: "gray",
  },
  categorySpan: {
    fontSize: 14,
    color: "gray",
  },
  divider: {
    width: "73%",
    margin: "auto",
    marginTop: 80,
  },
});

function OneMedicationPage() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { id } = useParams();

  const medications  = useSelector((state) => state?.medications.medications);
  const loading = useSelector((state) => state?.requests.loading);
  const token = useSelector((state) => state?.application.token);

  useEffect(() => {
    dispatch(fetchRequestGet(id));
    dispatch(getMedications());
  }, [dispatch, id]);

  const find = medications.find((item) => id === item._id);

  const handleDelete = (id) => {
    dispatch(removeMedication(id));
  };

  if (find) {
    return (
      <>
        <Grid container className={classes.content}>
          <Grid item xs={5} className={classes.leftColumn}>
            <Box className={classes.imgBox}>
              <CardMedia
                className={classes.image}
                component={"img"}
                src={find.img}
              />
            </Box>
          </Grid>
          <Grid item xs={7} className={classes.rightColumn}>
            {token ? (
              <Button
                className={classes.btnDelete}
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
              className={classes.name}
              gutterBottom
            >
              {find.name}
            </Typography>

            <Typography>
              <span className={classes.categorySpan}>Категория: </span>
              {find.category.name}
            </Typography>

            <Typography component="h1" variant="h5" className={classes.descr}>
              <span className={classes.descrSpan}>Описание:</span> <br />
              {find.descr}
            </Typography>

            <Box className={classes.itemTxtBottom}>
              <Typography>
                До истечения срока годности осталось -{" "}
                {`${
                  find.expiryDate -
                  (new Date().getDate() - new Date(find.createdAt).getDate())
                } дней`}
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
        </Grid>
        <Box>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              {token ? (
                <>
                  <Divider variant={"middle"} className={classes.divider} />
                  <Typography
                    variant={"h4"}
                    gutterBottom
                    className={classes.requestsTitle}
                  >
                    Заявки
                  </Typography>
                </>
              ) : (
                ""
              )}
            </>
          )}
          <OneMedicationRequests />
        </Box>
      </>
    );
  }

  return <></>;
}

export default OneMedicationPage;
