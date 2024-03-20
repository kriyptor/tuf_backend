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

  const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  };
  
app.use(cors(corsOptions));

app.use("/tuf", Router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
