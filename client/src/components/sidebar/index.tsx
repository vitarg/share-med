import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import categoriesSelectors from "../../store/selectors/categories";
import { getCategories } from "../../store/slices/categories";
import { NavLink } from "react-router-dom";
import { Link, List, ListItem } from "@mui/material";
import { ListItemNavLink } from "./styles";

function Sidebar() {
  const categories = useSelector(categoriesSelectors.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <List
      component="nav"
      aria-label="secondary mailbox folders"
      style={{ marginTop: 16 }}
    >
      <ListItem>
        <ListItemNavLink to={"/"}>
          Все лекарства
        </ListItemNavLink>
      </ListItem>
      {categories.map((item) => {
        return (
          <ListItem key={item._id}>
            <ListItemNavLink to={`/medications/categories/${item._id}`}>
              {item.name}
            </ListItemNavLink>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Sidebar;
