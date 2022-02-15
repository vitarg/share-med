import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMedication } from "../../../store/features/medications";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

interface AddMedicationProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const AddMedication: React.FC<AddMedicationProps> = ({
  open,
  setOpen,
}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<string>("0");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [expiryDate, setExpireDate] = useState("");
  const [hasRecipe, setHasRecipe] = useState<boolean>(false);

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleChangePrice = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPrice(e.target.value);
  };

  const handleChangeCategory = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCategory(e.target.value);
  };

  const handleChangeImg = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setImg(e.target.value);
  };

  const handleChangeExpireDate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setExpireDate(e.target.value);
  };

  const handleChangeHasRecipe = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setHasRecipe(e.target.checkValidity);
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
        category,
        img,
        expiryDate,
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
          onChange={(e) => handleChangeName(e)}
          autoFocus
          margin="dense"
          id="name"
          label="Название лекарства"
          type="text"
          fullWidth
        />
        <TextField
          onChange={(e) => handleChangePrice(e)}
          autoFocus
          margin="dense"
          id="price"
          label="Цена"
          type="number"
          fullWidth
        />
        <TextField
          onChange={(e) => handleChangeDescription(e)}
          autoFocus
          margin="dense"
          id="description"
          label="Описание"
          type="text"
          fullWidth
        />
        <TextField
          onChange={(e) => handleChangeCategory(e)}
          autoFocus
          margin="dense"
          id="category"
          label="Категория"
          type="text"
          fullWidth
        />
        <TextField
          onChange={(e) => handleChangeImg(e)}
          autoFocus
          margin="dense"
          id="imageInput"
          label="Изображение"
          type="text"
          fullWidth
        />
        <TextField
          onChange={(e) => handleChangeExpireDate(e)}
          autoFocus
          margin="dense"
          id="expire"
          label="Годен до"
          type="text"
          fullWidth
        />
        <TextField
          onChange={(e) => handleChangeHasRecipe(e)}
          autoFocus
          id="recipe"
          label="Нужен рецепт?"
          type="checkbox"
          fullWidth
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
