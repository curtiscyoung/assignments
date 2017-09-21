let express = require("express");
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 8080;
let app = express();
let Database = require("./database")
let list = new Database
let jackalopeRoute = require("./routes/jackalope")
let cardRoute = require("./routes/cards")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use("/jackalope", jackalopeRoute)
app.use("/cards", cardRoute)

app.get("/warmup", (req, res) => {
    res.send("YOOOO BITCH")
}) 







app.listen(PORT, ()=>{
    console.log("PORT IS RUNNING ON " + PORT)
})
