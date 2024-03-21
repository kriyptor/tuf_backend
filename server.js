const express = require("express");
const app = express();
const Router = require("./Routes/routes");
const dataBase = require("./Model/schema");
const cors = require('cors');
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


dataBase
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use("/tuf", Router);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
