import { Card, CardActions, CardMedia, styled } from "@mui/material";

export const MedicationCard = styled(Card)({
  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
  borderRadius: 10,
});

export const ImgBox = styled("div")({
  padding: 16,
  background: "url('/no-pictures.svg') center center/30% no-repeat",
  backgroundColor: "#ffffff",
  width: "calc(100% - 32px)",
  height: 200,
});

export const MedicationCardMedia = styled(CardMedia)({
  objectFit: "contain",
  width: "100%",
  maxWidth: "100%",
  minHeight: "100%",
  maxHeight: "100%",
});

export const MedicationCardActions = styled(CardActions)({
  padding: 16,
  paddingTop: 0,
  justifyContent: "flex-end",
});
