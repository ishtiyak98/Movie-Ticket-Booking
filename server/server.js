const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const usersRoute = require("./routes/users.route");
app.use("/api/users", usersRoute);

app.get("/", (req, res)=>{
    res.send("Movie Ticket Booking Server")
})

app.listen(port, () => {
  console.log(`server id running from port ${port}`);
});
