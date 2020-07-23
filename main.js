const express = require("express");
const chalk = require("chalk");
const app = express();

app.use(express.static("./public/"));

app.listen(80, () => {
  console.log(chalk.bgGreen("Servidor creado en el puerto 80"));
});