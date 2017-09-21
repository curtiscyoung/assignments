const express = require("express");
const cardRoute = express.Router();
const Database = require("../database")
const cards = new Database();

cardRoute.route("/")
    .get((req, res) =>{
        let data = cards.find();
        if (data === undefined){
            res.status(404).send({message: "FILE NOT FOUND", data})
        } else {
            res.status(200).send({message: "SUCCESS", data})
        }
    })
    .post((req, res) =>{
        let data = cards.save(req.body)
        if (data === undefined){
            res.status(404).send({message: "FILE NOT FOUND", data})
        } else {
            res.status(200).send({message: "SUCCESSFUL POST", data})
        } 
    })


cardRoute.route("/:id")
    .delete((req, res) =>{
        let data = cards.findOneAndRemove(req.params.id)
        if (data === undefined){
            res.status(404).send({message: "FILE NOT FOUND", data})
        } else {
            res.status(200).send({message: "SUCCESSFULLY DELETED", data})
        } 
    })
    .put((req, res) =>{
        let data = cards.findOneAndUpdate(req.params.id, req.body)
        if (data === undefined){
            res.status(404).send({message: "FILE NOT FOUND", data})
        } else {
            res.status(200).send({message: "SUCCESS", data})
        } 
    })
    
module.exports = cardRoute;

    



