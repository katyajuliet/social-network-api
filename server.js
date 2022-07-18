const express = require("express");
// const db = require("./config/connection");
const routes = require("./routes");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/social-network-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set('debug', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });

