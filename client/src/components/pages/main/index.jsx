import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMedications } from "../../../redux/features/medications";
import { Box, Grid, makeStyles, TextField } from "@material-ui/core";
import AddMedicationDialog from "./add-medication/AddMedicationDialog";
import AddMedicationButton from "./add-medication/AddMedicationButton";
import Index from "./sidebar";
import Medications from "./medications/Medications";
import { CircularProgress } from "@mui/material";
import { GridSidebar, LoadingWrapper, MainNavbar } from "./styles";

const Main = () => {
  const loading = useSelector((state) => state.medications.loading);

  const [search, setSearch] = useState("");
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMedications());
  }, []);

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return (
      <LoadingWrapper>
        <CircularProgress />
      </LoadingWrapper>
    );
  }

  return (
    <>
      <Grid container style={{ minHeight: "calc(100vh - 92px)" }}>
        <GridSidebar container item xs={2}>
          <Index />
        </GridSidebar>

        <Grid item xs={10} style={{ padding: 40 }}>
          <MainNavbar>
            <TextField
              id="standard-search"
              label="Найти лекарство"
              type="search"
              variant={"outlined"}
              onChange={handleFilter}
            />

            <AddMedicationButton setOpen={setOpen} />

            <AddMedicationDialog setOpen={setOpen} open={open} />
          </MainNavbar>

          <Grid container spacing={3}>
            <Medications search={search} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
