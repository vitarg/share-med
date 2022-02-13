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
import { Medication } from "../../../../redux/features/medications";

const useStyles = makeStyles({
  card: {
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    borderRadius: 10,
  },
  imgBox: {
    padding: 16,
    background: "url('/no-pictures.svg') center center/30% no-repeat",
    backgroundColor: "#ffffff",
    width: "calc(100% - 32px)",
    height: 200,
  },
  image: {
    objectFit: "contain",
    width: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%",
  },
  item: {
    height: "100%",
  },
  btnBox: {
    padding: 16,
    paddingTop: 0,
    justifyContent: "flex-end",
  },
});

interface MedicationsItemProps {
  item: Medication;
}

const MedicationsItem: React.FC<MedicationsItemProps> = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid item xs={3} key={item._id} className={classes.item}>
      <Card className={classes.card}>
        <CardActionArea>
          <Box className={classes.imgBox}>
            <CardMedia
              className={classes.image}
              component={"img"}
              src={item.img}
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>

            <Typography gutterBottom component="h2">
              {item?.category?.name}
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
