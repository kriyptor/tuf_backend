const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "postgres://tuf_db_user:PTeXcOTkkSPWCr1wbzEilU94pyzVqFut@dpg-cnt9ofqcn0vc73f08it0-a.singapore-postgres.render.com/tuf_db",
  {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
