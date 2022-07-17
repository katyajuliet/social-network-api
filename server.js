const dotenv = require("dotenv")
const express = require("express");
// const db = require("./config/connection");
const routes = require("./routes");
const mongoose = require("mongoose");
const connectDB = require('./config/connection');

connectDB();
// dotenv.config()

const dateFormat = require("../utils/dateFormat");

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
