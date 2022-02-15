import { List, ListItem, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import categoriesSelectors from "../../../store/selectors/categories";
import { getCategories } from "../../../store/features/categories";

const useStyles = makeStyles(() => ({
  list: {
    marginTop: 16,
  },
  listTitle: {
    color: "#484d52",
    marginLeft: 16,
  },
  link: {
    color: "#6c757d",
    textDecoration: "none",
  },
  active: {
    color: "#000",
  },
}));

function Sidebar() {
  const classes = useStyles();

  const categories = useSelector(categoriesSelectors.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <List
      component="nav"
      aria-label="secondary mailbox folders"
      className={classes.list}
    >
      <ListItem>
        <NavLink
          activeClassName={classes.active}
          className={classes.link}
          exact
          to={"/"}
        >
          Все лекарства
        </NavLink>
      </ListItem>
      {categories.map((item) => {
        return (
          <ListItem key={item._id}>
            <NavLink
              activeClassName={classes.active}
              className={classes.link}
              exact
              to={`/medications/categories/${item._id}`}
            >
              {item.name}
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Sidebar;
