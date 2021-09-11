const Request = require("../models/Request.model");
const Admin = require("../models/Admin.model");
const jwt = require("jsonwebtoken");

module.exports.requestsController = {
  addRequest: async (req, res) => {
    try {
      const { name, tel, email, message, medicationId } = req.body;

      // const requ = await Request.create({
      //   name: req.body.name,
      //   tel: req.body.tel,
      //   email: req.body.email,
      //   message: req.body.message,
      //   medicationId: req.params.medicationId,
      // });
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
};
