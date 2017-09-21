const express = require("express");
const bountyRoute = express.Router();
const mongoose = require("mongoose");
const bountyModel = require("../models/bounty.js");

bountyRoute.route("/")
    .get((req, res) =>{
        bountyModel.find(req.query, (err, bounties) =>{
            if (err) {
                res.status(500).send(err)
            }
            else if (bounties.length === 0){
                res.status(404).send({message: "FILE NOT FOUND"})
            }
            else {
                res.status(200).send({message: "SUCCESSFUL GET REQUEST", data: bounties})
            }
        })
    })
    .post((req, res) => {
        let bounty = new bountyModel(req.body)
        bounty.save((err, bounty) =>{
            if (err){
                res.status(500).send(err);
            }
            else {
                res.status(200).send({message: "SUCCESSFUL POST", data: bounty})
            }
        })
    })

    bountyRoute.route("/:id")
        .delete((req,res) =>{
            bountyModel.findByIdAndRemove(req.params.id, (err, bounty)=>{
                if (err){
                    res.status(500).send(err);
                }
                else if (bounty === null){
                    res.status(404).send({message: "FILE NOT FOUND"})
                }
                else {
                    res.status(200).send({message: "SUCCESSFULLY DELETED", data: bounty})
                }
            })
        })
        .put((req, res) =>{
            bountyModel.findByIdAndUpdate(req.params.id, req.body, (err, bounty)=>{
                if (err){
                    res.status(500).send(err);
                }
                else if (bounty === null){
                    res.status(404).send({message: "FILE NOT FOUND"})
                }
                else {
                    res.status(200).send({message: "SUCCESSFULLY UPDATED ITEM", data: bounty})
                }
            })
        })
        .get((req, res) =>{
            bountyModel.findById(req.params.id, (err, bounty) =>{
                if (err) {
                    res.status(500).send(err)
                }
                else if (bounty === null){
                    res.status(404).send({message: "FILE NOT FOUND"})
                }
                else {
                    res.status(200).send({message: "SUCCESSFUL GET REQUEST", data: bounty})
                }
            })
        })



    module.exports = bountyRoute;