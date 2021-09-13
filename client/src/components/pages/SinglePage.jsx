import {
  Grid,
  Typography,
  Button,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMedications } from "../../redux/features/medications";
import { Link } from "react-router-dom";
import { fetchRequestGet } from "../../redux/features/requests";
import { acceptRequest } from "../../redux/features/requests";
import { removeMedication } from "../../redux/features/medications";

function SinglePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { medications } = useSelector((state) => state.medications);
  const { requests, loading } = useSelector((state) => state.requests);
  const token = useSelector((state) => state.application.token);

  useEffect(() => {
    dispatch(fetchRequestGet(id));
  }, []);

  useEffect(() => {
    dispatch(getMedications());
  }, []);

  const find = medications.find((item) => {
    if (id === item._id) {
      return item;
    }
  });

  const handleAccept = (id, medicationId) => {
    dispatch(acceptRequest(id, medicationId));
  };

  const handleDelete = (id) => {
    dispatch(removeMedication(id));
  };

  return (
    <>
      {find ? (
        <Grid container>
          <Grid item xs={5}>
            {/* {find.image} */}
          </Grid>
          <Grid item xs={7}>
            <Typography component="h1" variant="h4">
              {find.name}
            </Typography>
            <Grid container>
              <Typography component="h1" variant="h5">
                {find.descr}
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={3}>
                <Typography component="h1" variant="h6">
                  {find.price}₽
                </Typography>
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={6}>
                <Button variant="contained" color="primary">
                  <Link to={`/requests/${id}`}>Оставить заявку</Link>
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                Срок годности в днях -{" "}
                {find.expiryDate -
                  (new Date().getDate() - new Date(find.createdAt).getDate())}
              </Grid>
              <Grid item xs={6}>
                {token ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      handleDelete(find._id);
                    }}
                  >
                    <Link to="/">Secondary</Link>
                  </Button>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                {token ? (
                  <Grid item xs={12}>
                    <h1>Requests</h1>
                  </Grid>
                ) : (
                  ""
                )}
                {token
                  ? requests.map((item) => {
                      return (
                        <Grid item xs={10}>
                          <Paper
                            style={{ padding: "40px 20px", marginTop: 20 }}
                          >
                            <Grid container wrap="nowrap" spacing={2}>
                              <Grid justifyContent="left" item xs zeroMinWidth>
                                <h4 style={{ margin: 0, textAlign: "left" }}>
                                  {item.name}
                                </h4>
                                <p style={{ textAlign: "left" }}>
                                  {item.message}
                                </p>
                                <p style={{ textAlign: "left", color: "gray" }}>
                                  {item.tel}
                                  <br />
                                  {item.email}
                                </p>
                                <Button
                                  variant="outlined"
                                  style={{
                                    textAlign: "left",
                                    color: "green",
                                  }}
                                  onClick={() => {
                                    handleAccept(item._id, item.medicationId);
                                  }}
                                  disabled={item.isAccept}
                                >
                                  Принять
                                </Button>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                      );
                    })
                  : ""}
              </>
            )}
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
}

export default SinglePage;
