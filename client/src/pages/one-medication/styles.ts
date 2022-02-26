import { Grid, styled } from "@mui/material";

export const GridContent = styled(Grid)({
  margin: "auto",
  marginTop: 40,
  width: "75%",
  position: "relative",
});

export const ImgBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 400,
  height: 350,
  backgroundColor: "#e5e5e5",
  background: "url('/no-pictures.svg') center center/30% no-repeat",
});

export const Img = styled('img')({

});