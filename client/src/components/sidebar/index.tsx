import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import categoriesSelectors from "../../store/categories/selectors";
import { List, ListItem } from "@mui/material";
import { getCategories } from "../../store/categories/thunks";
import { NavLink } from "react-router-dom";

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
        <NavLink to={"/"} className={({ isActive }) => isActive ? "active-link" : "not-active-link"
        }>Все лекарства</NavLink>
      </ListItem>
      {categories.map((item) => {
        return (
          <ListItem key={item._id}>
            <NavLink to={`/medications/categories/${item._id}`} className={({ isActive }) => isActive ? "active-link" : "not-active-link"
            }>
              {item.name}
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Sidebar;
