import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMedications } from "../../../redux/features/medications";
import {
  Box,
  CircularProgress,
  Grid,
  makeStyles,
  TextField,
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
    alignItems: "center",
    marginBottom: 20,
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const medications = useSelector((state) => state.medications.medications);

  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   if (fetching) {
  //     dispatch(getMedications(currentPage, setCurrentPage, setFetching));
  //   }
  // }, [fetching]);
  // console.log(currentPage);

  // const scrollHandler = (e) => {
  //   if(loading) return;
  //
  //   if (
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //     10
  //   ) {
  //     setCurrentPage((prevState) => {
  //         dispatch(getMedications(prevState + 1));
  //         return prevState + 1
  //     })
  //
  //   }
  // };
  //
  // useEffect(() => {
  //   document.addEventListener("scroll", scrollHandler);
  //
  //   return () => {
  //     document.removeEventListener("scroll", scrollHandler);
  //   };
  // }, []);

  useEffect(() => {
    dispatch(getMedications(1));
  }, []);

  const loading = useSelector((state) => state.medications.loading);

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
              label="Найти лекарство"
              type="search"
              variant={"outlined"}
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
