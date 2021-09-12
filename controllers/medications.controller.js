const path = require("path");
const Medication = require("../models/Medication.model");
const { v4: uuidv4 } = require("uuid");

module.exports.medicationsController = {
  createMedication: async (req, res) => {
    try {
      const data = await Medication.create({
        name: req.body.name,
        price: req.body.price,
        descr: req.body.descr,
        category: req.body.category,
        img: req.body.img,
        hasRecipe: req.body.hasRecipe,
        expiryDate: req.body.expiryDate,
      });
      res.json("Лекарство добавлено");
    } catch (err) {
      res.json(err);
    }
  },
  getAllMedications: async (req, res) => {
    try {
      const data = await Medication.find({}).populate("category");
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  getMedication: async (req, res) => {
    try {
      const data = await Medication.findById(req.params.id);
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  removeMedication: async (req, res) => {
    try {
      await Medication.findByIdAndRemove(req.params.id);
      res.json("Лекарство удалено");
    } catch (err) {
      res.json(err);
    }
  },
  getMedicationsByCategory: async (req, res) => {
    try {
      const data = await Medication.find({ category: req.params.id });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  addImageForMedication: async (req, res) => {
    try {
      const newFileName = `/image/${uuidv4()}${path.extname(
        req.files.image.name
      )}`;

      await req.files.image.mv(`./public${newFileName}`, async (err) => {
        if (err) {
          console.log(err);
        } else {
          await Medication.findByIdAndUpdate(req.params.id, {
            image: newFileName,
          });
          res.json("Файл загружен");
        }
      });
    } catch (err) {
      res.json(err);
    }
  },
};
