const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 7800;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const reviewRoute = require("./routes/reviews-routes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use("/scubasound", reviewRoute)



mongoose.connect("mongodb://localhost/scubasound", (err) =>{
    if (err) throw err
    console.log("connected to MongoDb");
    app.listen(PORT, ()=>{
        console.log("RUNNING ON PORT" + PORT)
    })
})


