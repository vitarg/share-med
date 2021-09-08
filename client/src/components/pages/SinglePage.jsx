import { Grid, Typography,Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getMedications } from "../../redux/features/medications"

function SinglePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { medications } = useSelector(state => state.medications);

  useEffect(() => {
    dispatch(getMedications());
  }, [])

  const find = medications.find(item => {
    if (id == item._id) {
      return item;
    }
  })

  return (
    <Grid container>
      <Grid item xs={5}>
        {find.image}
      </Grid>
      <Grid item xs={7}>
        <Typography component="h1" variant="h4">{find.name}</Typography>
        <Grid container>
        <Typography component="h1" variant="h5">{find.descr}</Typography>
        </Grid>
        <Grid container>
         <Grid item xs={3}><Typography component="h1" variant="h6">{find.price}₽</Typography></Grid>
         <Grid item xs={3}></Grid>
         <Grid item xs={6}><Button variant="contained" color="primary">Primary</Button></Grid>
        </Grid>
      </Grid>
    </Grid> 
  );
}

export default SinglePage;