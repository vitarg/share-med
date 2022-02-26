import React from "react";
import { Link } from "react-router-dom";
import { Medication } from "../../../../store/slices/medications";
import {
  Button,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import {
  ImgBox,
  MedicationCard,
  MedicationCardActions,
  MedicationCardMedia,
} from "./styles";

interface MedicationItemProps {
  item: Medication;
}

const MedicationItem: React.FC<MedicationItemProps> = ({ item }) => {
  return (
    <Grid item xs={3} key={item._id} style={{ height: "100%" }}>
      <MedicationCard>
        <CardActionArea>
          <ImgBox>
            <MedicationCardMedia src={item.img} />
          </ImgBox>
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
        <MedicationCardActions>
          <Button
            component={Link}
            to={`/medications/${item._id}`}
            size="medium"
            color="primary"
            variant={"contained"}
          >
            Подробнее
          </Button>
        </MedicationCardActions>
      </MedicationCard>
    </Grid>
  );
};

export default MedicationItem;
