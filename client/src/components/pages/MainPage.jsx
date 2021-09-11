import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMedications } from "../../redux/features/medications";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import DialogForm from "./DialogForm";

const MainPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getMedications());
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const { medications } = useSelector((state) => state.medications);
  const token = useSelector((state) => state.application.token);

  if (id) {
    return (
      <Grid container justifyContent={"space-around"}>
        {medications
          .filter((item) => item.category === id)
          .map((item) => {
            return (
              <Grid item xs={3} key={item._id}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.descr}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link to={`/medications/${item._id}`}>Подробнее</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    );
  }
  return (
    <>
      {token ? (
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Добавить +
        </Button>
      ) : (
        ""
      )}
      <DialogForm setOpen={setOpen} open={open} />
      <Grid container justifyContent={"space-around"}>
        {medications.map((item) => {
          return (
            <Grid item xs={3} key={item._id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="p"
                    >
                      {item.price ? item.price : "Бесплатно"}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {item.descr}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link to={`/medications/${item._id}`}>Подробнее</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default MainPage;
