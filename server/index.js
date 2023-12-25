require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const user = require("./Router/user")
const propinfo = require("./Router/Property_info")

app.use("/user",user)
app.use("/propinfo",propinfo)

app.listen(8000, () => {
  console.log(`connected localhost:8000`);
});
