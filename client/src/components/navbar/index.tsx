import React from "react";
import { TextField } from "@mui/material";
import AddMedicationBtn from "../../pages/main/add-medication/add-medication-btn";
import AddMedication from "../../pages/main/add-medication";
import { MainNavbar } from "../../pages/main/styles";

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

      <AddMedicationBtn setOpen={setOpen} />

      <AddMedication setOpen={setOpen} open={open} />
    </MainNavbar>
  );
};

export default Navbar;
