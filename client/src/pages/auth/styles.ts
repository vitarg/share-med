import { Paper, styled } from "@mui/material";

export const AuthPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 32,
  boxShadow: "0 .5rem 1rem rgba(0, 0, 0,.15)",
}));

export const FormContent = styled("div")({});
