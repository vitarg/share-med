import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import appSelectors from "../../../../store/selectors/app";

const useStyles = makeStyles({
  addBtn: {
    height: 42,
  },
});

interface AddMedicationButtonProps {
  setOpen: (arg: boolean) => void;
}

const AddMedicationButton: React.FC<AddMedicationButtonProps> = ({
  setOpen,
}) => {
  const classes = useStyles();

  const token = useSelector(appSelectors.token);

  const handleClickOpen = () => {
    setOpen(true);
  };

  if (token) {
    return (
      <Button
        className={classes.addBtn}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        endIcon={<AddIcon />}
      >
        Добавить
      </Button>
    );
  }

  return <></>;
};

export default AddMedicationButton;
