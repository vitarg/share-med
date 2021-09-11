const Request = require("../models/Request.model");
const Admin = require("../models/Admin.model");
const jwt = require("jsonwebtoken");

module.exports.requestsController = {
  addRequest: async (req, res) => {
    try {
      const { name, tel, email, message, medicationId } = req.body;

      await Request.create({ name, tel, email, message, medicationId });
      res.json("Пользователь создан");
    } catch (e) {
      res.json("Ошибка в addRequest");
    }
  },
  getRequestByMedication: async (req, res) => {
    try {
      const getRequest = await Request.find({
        medicationId: req.params.medicationId,
      });

      return res.json(getRequest);
    } catch (e) {
      res.json("Error in: " + e);
    }
  },
  acceptRequest: async (req, res) => {
    try {
      const data = await Request.findById(req.params.id);
    } catch (e) {
      res.json("Error in: " + e);
    }
  },
};
