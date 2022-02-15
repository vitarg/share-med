import { styled } from "@mui/material";

export const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  padding: "20px",
  "& > *": {
    width: theme.spacing(70),
    margin: "auto",
    height: theme.spacing(70),
    textAlign: "center",
    justifyContent: "center",
  },
}));
