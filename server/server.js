const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server id running from port ${port}`);
});
