const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const initWebRoutes = require("./src/routes/web");
const multer = require("multer");

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

initWebRoutes(app);

/*app.get("/", (req, res) => {
  res.send("hello");
});*/

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, req.body.name);
  },
  filename: (req, file, cb) => {
    cb(cb, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("file saved");
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Discussion panel backend is rinning on port ${PORT}`);
});
