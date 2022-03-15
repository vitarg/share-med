import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Autocomplete,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  TextField,
} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DesktopDatePicker } from "@mui/lab";
import { addMedication } from "../../../store/medications/thunks";

interface AddMedicationProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

interface OptionsCategory {
  label: string,
  id: string
}

const options = [
  { label: 'Для сердца', id: "61409cb3064023b83260caff" },
  { label: 'Нервная система', id: "61409ce5064023b83260cb01" },
  { label: 'Кости и мышцы', id: "61409d25064023b83260cb03" },
  { label: 'Прочие препараты', id: "61409d4f064023b83260cb05" },
]

const AddMedication: React.FC<AddMedicationProps> = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<string>("0");
  const [category, setCategory] = useState<OptionsCategory>(options[0]);
  const [img, setImg] = useState("");
  const [expiryDate, setExpireDate] = useState<Date | null>(null);
  const [hasRecipe, setHasRecipe] = useState<boolean>(false);

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleChangePrice = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPrice(e.target.value);
  };

  const handleChangeImg = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImg(e.target.value);
  };

  const handleChangeExpireDate = (
    e: Date | null
  ) => {
    console.log(expiryDate)
    setExpireDate(e);
  };

  const handleChangeHasRecipe = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHasRecipe(e.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(
      addMedication({
        name,
        price: Number(price),
        description,
        category: category.id,
        img,
        expiryDate: expiryDate?.toLocaleDateString() || new Date().toLocaleDateString(),
        hasRecipe,
      })
    );
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Добавить лекарство</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Заполните поля, чтобы добавить новое лекарство в каталог
        </DialogContentText>
        <TextField
          onChange={handleChangeName}
          margin="dense"
          id="name"
          label="Название лекарства"
          type="text"
          fullWidth
        />
        <TextField
          onChange={handleChangePrice}
          margin="dense"
          id="price"
          label="Цена"
          type="number"
          fullWidth
        />
        <TextField
          onChange={handleChangeDescription}
          margin="dense"
          id="description"
          label="Описание"
          type="text"
          fullWidth
        />
        <Autocomplete
          value={category}
          onChange={(event: any, newValue: any) => {
            setCategory(newValue)
          }}
          id="controllable-states-demo"
          options={options}
          renderInput={(params) => <TextField {...params} label="Категория" />}
        />
        <TextField
          onChange={handleChangeImg}
          margin="dense"
          id="imageInput"
          label="Изображение"
          type="text"
          fullWidth
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Годен до"
            value={expiryDate}
            minDate={new Date()}
            onChange={handleChangeExpireDate}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </LocalizationProvider>
        <FormControlLabel
          control={<Checkbox checked={hasRecipe} onChange={handleChangeHasRecipe} />}
          label="Нужен рецепт?"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Отменить
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Подтвердить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMedication;
