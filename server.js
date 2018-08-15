const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("./api/models/userModel");
const bodyParser = require("body-parser");
const routes = require("./api/routes/userRoutes");

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb://admin:teste123@ds121282.mlab.com:21282/heroku_xpjr01hn",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Conectado com sucesso."))
  .catch(err => console.log("Nao foi possivel conectar ao banco de dados"));

routes(app);

app.listen(port);

console.log("Message RESTful API server started on: " + port);
