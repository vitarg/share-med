import { List, ListItem, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAllCategories } from "../../../../redux/features/categories";

const useStyles = makeStyles((theme) => ({
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

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

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
