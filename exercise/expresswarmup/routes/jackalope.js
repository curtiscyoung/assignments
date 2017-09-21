const express = require("express");
///making the jackalope route
const jackalopeRoute = express.Router();
//importing your database
const Database = require("../database")
const jackalopes = new Database();

jackalopeRoute.route("/")
    .get((req, res) => {
        let data = jackalopes.find()
        if (data === undefined) {
            res.status(404).send({ message: "FILE NOT FOUND", data })
        } else {
            res.status(201).send({ message: "SUCCESS", data })
        }
    })
    .post((req, res) => {
        let data = jackalopes.save(req.body)
        if (data === undefined){
            res.status(404).send({ message: "FILE NOT FOUND", data })
        } else {
            res.status(201).send({message: "SUCCESSFUL POST", data})
        }    
    
        })

jackalopeRoute.route("/:id")
        .delete((req, res) => {
            let data = jackalopes.findOneAndRemove(req.params.id)
            if (data === undefined) {
                res.status(404).send({ message: "FILE NOT FOUND", data })
            } else {
                res.status(201).send({ message: "SUCCESSFULLY DELETED", data })
            }
        })
        .put((req, res) => {
            let data = jackalopes.findOneAndUpdate(req.params.id, req.body)
            if (data === undefined) {
                res.status(404).send({ message: "FILE NOT FOUND", data })
            } else {
                res.status(201).send({ message: "SUCCESS", data })
            }
        })

    module.exports = jackalopeRoute