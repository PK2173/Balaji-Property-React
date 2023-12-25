const knex = require("../config/bdconnection");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const { createToken, virifiToken } = require("../middelwear/jwt");
const errorlog = require("./error");

router.post("/register", async (req, res) => {
  try {
    if (req.body.username != undefined && req.body.username != "") {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      await knex("user").insert(req.body);
      res.send("Data Inserted");
    }
  } catch (error) {
    errorlog(error, "line -- 18 user.js error on register api");
    res.send("somthing want wrong");
  }
});

router.post("/login", async (req, res) => {
  try {
    let data = await knex("user").where({ email: req.body.email });
    if (data[0].username != undefined) {
      let check = await bcrypt.compare(req.body.password, data[0].password);
      if (check) {
        let cookie = createToken(data[0]);
        // res.cookie("addcookie",cookie);
        res.send({ token: cookie, userdata: data[0] });
      }
    }
  } catch (error) {
    errorlog(error, "line -- 35 user.js error on login api");
    res.send("somthing went wrong");
  }
});

router.get("/auth", virifiToken, async (req, res) => {
  try {
    res.send(req.userData);
  } catch (error) {
    errorlog(error, "line -- 44 user.js error on auth api");
  }
});

module.exports = router;
