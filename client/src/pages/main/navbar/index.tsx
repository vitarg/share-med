import React from "react";
import { TextField } from "@mui/material";
import AddMedicationButton from "../add-medication/AddMedicationButton";
import AddMedicationDialog from "../add-medication/AddMedicationDialog";
import { MainNavbar } from "../styles";

interface NavbarProps {
  onChangeFilter: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onChangeFilter }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <MainNavbar>
      <TextField
        id="standard-search"
        label="Найти лекарство"
        type="search"
        variant={"outlined"}
        onChange={onChangeFilter}
      />

      <AddMedicationButton setOpen={setOpen} />

      <AddMedicationDialog setOpen={setOpen} open={open} />
    </MainNavbar>
  );
};

export default Navbar;
