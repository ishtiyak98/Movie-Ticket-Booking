const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.zbpyoh0.mongodb.net`;
mongoose.connect(uri);

const connection = mongoose.connection;

connection.on("connected", ()=>{
    console.log("MongoDB connected");
})

connection.on("error", (err)=>{
    console.log("MongoDB connection failed");
})
