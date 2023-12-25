const jwt = require("jsonwebtoken");
const knex = require("../config/bdconnection");
const errorlog = require("../Router/error");

const createToken = ({ user_id }) => {
  try {
    return jwt.sign(user_id, "praveenggfygekfjegfggfgwe");
  } catch (error) {
    errorlog(error, "line -- 9 jwt.js error on createToken funtion");
  }
};

const virifiToken = async (req, res, next) => {
  try {
    if (req.headers.seingtoken) {
      const token = req.headers.seingtoken;
      const tr = jwt.verify(token, "praveenggfygekfjegfggfgwe");
      const user = await knex("user").where({ user_id: tr });
      req.userData = user;
      next();
    } else {
      res.send("token has expaire");
    }
  } catch (error) {
    errorlog(error, "line -- 22 jwt.js error on virifiToken funtion");
    res.send("token has expaire");
  }
};

module.exports = { createToken, virifiToken };
