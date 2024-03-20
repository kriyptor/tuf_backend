const { DataTypes } = require('sequelize');
const sequelize = require('../Services/dbConnection');


//   model schema
const dataBase = sequelize.define("tuf_db", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codeLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sourceCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  });
  

module.exports = dataBase;