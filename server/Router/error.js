const knex = require("../config/bdconnection");

const errorlog = async (errdesc, FileandLineNo) => {
  try {
    await knex("errorLog").insert({ errdesc:`${errdesc}`, FileandLineNo });
  } catch (error) {
    console.log(error);
  }
};

module.exports = errorlog;
