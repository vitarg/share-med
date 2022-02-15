import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import categoriesSelectors from "../../store/selectors/categories";
import { getCategories } from "../../store/features/categories";
import { NavLink } from "react-router-dom";
import { List, ListItem } from "@mui/material";

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
        <NavLink className={() => "asd"} to={"/"}>
          Все лекарства
        </NavLink>
      </ListItem>
      {categories.map((item) => {
        return (
          <ListItem key={item._id}>
            <NavLink to={`/medications/categories/${item._id}`}>
              {item.name}
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Sidebar;
