const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const replyRoutes = require("./src/routes/Reply");
const commentsRoutes = require("./src/routes/comments");
const userRoutes = require("./src/routes/user");

dotenv.config();

const app = express();

app.use(express.json());

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Db is connected");
  })
  .catch((err) => {
    console.log("error:" + err);
  });

app.use(replyRoutes);

app.use(userRoutes);
app.use(commentsRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Discussion panel backend is rinning on port ${PORT}`);
});
