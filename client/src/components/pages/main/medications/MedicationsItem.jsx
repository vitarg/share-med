import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    borderRadius: 10,
  },
  imgBox: {
    background: "url('/no-pictures.svg') center center/30% no-repeat",
    backgroundColor: "#e5e5e5",
    width: "100%",
    height: 200,
  },
  item: {
    height: "100%",
  },
  btnBox: {
    padding: 16,
    justifyContent: "flex-end",
  },
});

const MedicationsItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid item xs={3} key={item._id} className={classes.item}>
      <Card className={classes.card}>
        <CardActionArea>
          <Box className={classes.imgBox}>
            <CardMedia
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>

            <Typography gutterBottom component="h2">
              {item.category.name}
            </Typography>

            <Typography variant="h6" color="textSecondary" component="p">
              {item.price ? `${item.price} ₽` : "Бесплатно"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.btnBox}>
          <Button
            component={Link}
            to={`/medications/${item._id}`}
            size="medium"
            color="primary"
            variant={"contained"}
          >
            Подробнее
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MedicationsItem;
