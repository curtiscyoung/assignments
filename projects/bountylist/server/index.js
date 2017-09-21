const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
const PORT = 8080;
const mongoose = require("mongoose")
const bountyRoute = require("./routes/bounty.js")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use("/bounties", bountyRoute)

mongoose.connect("mongodb://localhost/bounties", (err)=>{
        if (err) throw err
        console.log("connected to MongoDb");
        app.listen(PORT, ()=>{
            console.log("RUNNING ON PORT" + PORT)
    })
})

//////mLab database////
// mongodb://curtiscyoung:raprap@ds135444.mlab.com:35444/bounties
/////