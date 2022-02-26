import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMedications } from "../../store/slices/medications";
import Sidebar from "../../components/sidebar";
import Index from "./medications";
import { CircularProgress, Grid } from "@mui/material";
import { GridSidebar, LoadingWrapper } from "./styles";
import Navbar from "../../components/navbar";
import medicationsSelectors from "../../store/selectors/medications";

const Main = () => {
  const loading = useSelector(medicationsSelectors.loading);

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMedications());
  }, [dispatch]);

  const handleChangeFilter = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          <Sidebar />
        </GridSidebar>

        <Grid item xs={10} style={{ padding: 40 }}>
          <Navbar onChangeFilter={handleChangeFilter} />

          <Grid container spacing={3}>
            <Index search={search} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
