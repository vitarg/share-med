const Admin = require('../models/Admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports.adminsController = {
  registerAdmin: async (req, res) => {
    try {

      const hash = await bcrypt.hash(req.body.password, 10) // в файле .env нужно сделать переменную BCRYPT_ROUNDS с значением 10 и поставить вместо второго параметра

      const admin1 = await Admin.create({
        login: req.body.login,
        password: hash
      });

      res.json(admin1)
    } catch (e) {
      res.json("Ошибка в registerAdmin")
    }
  },
  login: async (req, res) => {
    const { login, password } = req.body

    const candidate = await Admin.findOne({ login });

    if (!candidate) {
      return res.status(401).json("неверный логин")
    };

    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      res.status(401).json('неверный пароль')
    };

    const payload = {
      id: candidate._id,
      login: candidate.login
    }


    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: '24h'
    } )

    res.json({token})
  }
}