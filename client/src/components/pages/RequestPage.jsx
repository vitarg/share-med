import React, { useState } from 'react';
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchRequest } from '../../redux/features/requests';


const RequestPage = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: "20px",
      '& > *': {
        width: theme.spacing(70),
        margin: "auto",
        height: theme.spacing(70),
        textAlign: "center",
        justifyContent: "center"
      },
    },
    gridItem: {
      marginTop: "20px"
    }
  }));

    const classes = useStyles();

    const { medicationId } = useParams()
  console.log(medicationId)
    const dispatch = useDispatch();

    const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const history = useHistory()

    const sendRequest = () => {
      dispatch(fetchRequest(medicationId, name, tel, email, message))
      history.push('/great')
    }
  return <div className={classes.root}>
    <Paper elevation={3}>
      <Typography variant="h6" gutterBottom className={classes.gridItem}>
        Заявка на лекарство
      </Typography>
      <Grid container spacing={3} className={classes.gridItem} justifyContent={'center'}>
        <Grid item xs={12} sm={8} >
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Name"
            fullWidth
            autoComplete="given-name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="Number"
            name="Number"
            label="Number"
            fullWidth
            type={'tel'}
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            type={'email'}
            required
            id="address"
            name="address"
            label="email"
            fullWidth
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            id="filled-multiline-static"
            label="Почему вам нужно это лекарство?"
            multiline
            rows={5}
            fullWidth
            variant={'outlined'}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Button variant="contained" color="secondary" onClick={sendRequest}>
            Отправить запрос
          </Button>
        </Grid>
      </Grid>
    </Paper>

  </div>

};

export default RequestPage;