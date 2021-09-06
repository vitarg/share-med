const Medication = require("../models/Medication.model");

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
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  getAllMedications: async (req, res) => {
    try {
      const data = await Medication.find({});
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
      const data = await Medication.findById({ category: req.params.id });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
};
