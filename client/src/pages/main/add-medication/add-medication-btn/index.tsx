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

interface AddMedicationBtnProps {
  setOpen: (arg: boolean) => void;
}

const AddMedicationBtn: React.FC<AddMedicationBtnProps> = ({
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

export default AddMedicationBtn;
