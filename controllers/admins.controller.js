const Admin = require("../models/Admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.adminsController = {
  registerAdmin: async (req, res) => {
    try {

      const { name, login, password } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      await Admin.create({
        name: name,
        login: login,
        password: hash,
      });

      return res.json("Аккаунт успешно зарегистрирован");
    } catch (e) {
      return res.status(400).json(`Ошибка при регистрации: ${e.toString()}`);

    }
  },
  login: async (req, res) => {
    const { login, password } = req.body;

    const candidate = await Admin.findOne({ login });

    if (!candidate) {
      return res.status(401).json("неверный логин");
    }

    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      res.status(401).json("неверный пароль");
    }

    const payload = {
      id: candidate._id,
      login: candidate.login,
    };

    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });

    res.json({ token });
  },
};
