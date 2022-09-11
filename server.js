const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Discussion panel rinning on port ${PORT}`);
});