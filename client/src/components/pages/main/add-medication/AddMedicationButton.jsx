import React from "react";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

const AddMedicationButton = ({ setOpen }) => {
  const token = useSelector((state) => state.application.token);

  const handleClickOpen = () => {
    setOpen(true);
  };

  if (token) {
    return (
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Добавить +
      </Button>
    );
  }
};

export default AddMedicationButton;
