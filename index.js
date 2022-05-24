const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

//middleware

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER}@cluster0.txqnyb6.mongodb.net/?retryWrites=true&w=majority`;

app.get("/", (req, res) => {
    res.send("Auto Zone server is running");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
