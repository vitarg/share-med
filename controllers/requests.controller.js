const Request = require('../models/Request.model');

module.exports.requestsController = {
  addRequest: async (req, res) => {
    try {
      await Request.create({
        name: req.body.name,
        tel: req.body.tel,
        email: req.body.email,
        message: req.body.message,
        medicationId: req.params.medicationId
      })
      res.json('Заявка успешно добавлена')
    } catch (e) {
      res.json('Ошибка в addRequest')
    }
  },
  getRequestByMedication: async (req, res) => {
    try {
      const getRequest = await Request.find({medicationId: req.params.medicationId})
      res.json(getRequest)
    } catch (e) {
      res.json('Ошибка в getRequestMedication')
    }
  }

}