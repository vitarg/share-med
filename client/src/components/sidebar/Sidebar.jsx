import { List, ListItem } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchAllCategories } from "../../redux/features/categories"

function Sidebar() {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [])

  return (
    <List component="nav" aria-label="secondary mailbox folders">
          {categories.map((item) => {
            return (
              <ListItem>
                <NavLink to={`/medications/categories/${item._id}`}>{item.name}</NavLink>
              </ListItem>
            )
          })}
    </List>
  );
}

export default Sidebar;