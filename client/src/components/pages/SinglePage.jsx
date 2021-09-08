import { Grid, Typography,Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleMedication } from "../../redux/features/medications"

function SinglePage(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { medications } = useSelector(state => state.medications);

  useEffect(() => {
    dispatch(getSingleMedication(id))
  }, [])

  return (
    <Grid container>
      <Grid item xs={5}>
        {medications.image}
      </Grid>
      <Grid item xs={7}>
        <Typography component="h1" variant="h4">{medications.name}</Typography>
        <Grid container>
        <Typography component="h1" variant="h5">{medications.descr}</Typography>
        </Grid>
        <Grid container>
         <Grid item xs={3}><Typography component="h1" variant="h6">{medications.price}₽</Typography></Grid>
         <Grid item xs={3}></Grid>
         <Grid item xs={6}><Button variant="contained" color="primary">Primary</Button></Grid>
        </Grid>
      </Grid>
    </Grid> 
  );
}

export default SinglePage;