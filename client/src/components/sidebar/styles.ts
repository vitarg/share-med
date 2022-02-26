import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ListItemNavLink = styled(NavLink)({
  // color: "#484d52",
  marginLeft: 16,
  color: ('active') ? "#6c757d" : "#484d52",
  textDecoration: "none",
});

export const ListItemLink = styled(NavLink)({
  color: "#6c757d",
  textDecoration: "none",
});
