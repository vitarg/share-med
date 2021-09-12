import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addMedication } from "../../../../redux/features/medications";

const AddMedicationDialog = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [expiryDate, setExpireDate] = useState("");
  const [hasRecipe, setHasRecipe] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeImg = (e) => {
    setImg(e.target.value);
  };

  const handleChangeExpireDate = (e) => {
    setExpireDate(e.target.value);
  };

  const handleChangeHasRecipe = (e) => {
    setHasRecipe(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(
      addMedication(
        name,
        price,
        description,
        category,
        img,
        expiryDate,
        hasRecipe
      )
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
          type="text"
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

export default AddMedicationDialog;
