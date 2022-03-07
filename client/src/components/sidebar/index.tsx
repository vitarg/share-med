import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import categoriesSelectors from "../../store/selectors/categories";
import { getCategories } from "../../store/slices/categories";
import { List, ListItem } from "@mui/material";
import { RouterLink, RouterActiveLink } from "./styles";

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
        <RouterLink to={"/"}>Все лекарства</RouterLink>
      </ListItem>
      {categories.map((item) => {
        return (
          <ListItem key={item._id}>
            <RouterLink to={`/medications/categories/${item._id}`}>
              {item.name}
            </RouterLink>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Sidebar;
