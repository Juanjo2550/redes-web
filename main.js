const express = require("express");
const chalk = require("chalk");
const app = express();

app.on("/", express.static("./public/"));

app.listen(() => {
  console.log(chalk.bgGreen("Servidor creado en el puerto 80"));
}, 80);