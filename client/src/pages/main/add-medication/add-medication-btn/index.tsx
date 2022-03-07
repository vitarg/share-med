import React from "react";
import { useSelector } from "react-redux";
import { Add } from "@mui/icons-material";
import appSelectors from "../../../../store/selectors/app";
import { Button } from "@mui/material";

interface AddMedicationBtnProps {
  setOpen: (arg: boolean) => void;
}

const AddMedicationBtn: React.FC<AddMedicationBtnProps> = ({ setOpen }) => {
  const token = useSelector(appSelectors.token);

  const handleClickOpen = () => {
    setOpen(true);
  };

  if (token) {
    return (
      <Button
        style={{ height: 42 }}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        endIcon={<Add />}
      >
        Добавить
      </Button>
    );
  }

  return <></>;
};

export default AddMedicationBtn;
