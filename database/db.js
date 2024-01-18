const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        dialect: "mysql",
        host: "localhost"
    });

db.authenticate()
  .then(() => {
    console.log("Conexão bem-sucedida.");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });

module.exports = db;