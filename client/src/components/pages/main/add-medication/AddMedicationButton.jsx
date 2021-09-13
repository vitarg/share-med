import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  addBtn: {
    height: 42
  }
})

const AddMedicationButton = ({ setOpen }) => {
  const classes = useStyles()

  const token = useSelector((state) => state.application.token);

  const handleClickOpen = () => {
    setOpen(true);
  };

  if (token) {
    return (
      <Button className={classes.addBtn} variant="outlined" color="primary" onClick={handleClickOpen} endIcon={<AddIcon/>}>
        Добавить
      </Button>
    );
  }

  return <></>;
};

export default AddMedicationButton;
