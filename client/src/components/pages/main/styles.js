import { Grid, styled } from "@mui/material";

export const LoadingWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "calc(100vh - 92px)",
});

export const MainNavbar = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
});

export const GridSidebar = styled(Grid)({
  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
});
