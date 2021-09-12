import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMedications } from "../../../redux/features/medications";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import AddMedicationDialog from "./add-medication/AddMedicationDialog";
import AddMedicationButton from "./add-medication/AddMedicationButton";
import Sidebar from "./sidebar/Sidebar";
import Medications from "./medications/Medications";

const useStyles = makeStyles((theme) => ({
  sidebarWrap: {
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
  },
  main: {
    minHeight: "calc(100vh - 92px)",
  },
  content: {
    padding: 40,
  },
  contentHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  contentBody: {},
}));

const MainPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getMedications());
  }, []);



  const { loading } = useSelector((state) => state.medications);

  const [search, setSearch] = useState("");

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <Grid container className={classes.main}>
        <Grid container item xs={2} className={classes.sidebarWrap}>
          <Sidebar />
        </Grid>

        <Grid item xs={10} className={classes.content}>
          <Box className={classes.contentHeader}>
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              onChange={handleFilter}
            />

            <AddMedicationButton setOpen={setOpen} />

            <AddMedicationDialog setOpen={setOpen} open={open} />
          </Box>

          <Grid container spacing={3}>
            <Medications search={search} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
