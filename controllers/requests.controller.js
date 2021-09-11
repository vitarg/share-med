const Request = require("../models/Request.model");
const Admin = require("../models/Admin.model");
const Medications = require("../models/Medication.model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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

      let testEmailAccount = await nodemailer.createTestAccount();

      let transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
          user: `${process.env.nodemailer_login}`,
          pass: `${process.env.nodemailer_password}`,
        },
      });

      let result = await transporter.sendMail({
        from: `${process.env.nodemailer_login}`,
        to: data.email,
        subject: "О заявке про лекарство",
        text: "Вы успешно получили лекарство.",
        html: "<h1>Вы успешно получили лекарство.</h1>",
      });
      console.log(result);
      // await Request.deleteMany({
      //   medicationId: data.medicationId,
      // });
      res.json(`Заявка принята ${data}`);
    } catch (e) {
      res.json("Error in: " + e);
    }
  },
};
