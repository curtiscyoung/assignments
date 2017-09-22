const express = require("express");
const reviewRoute = express.Router();
const mongoose = require("mongoose");
const reviewModel = require("../models/review-models.js");

reviewRoute.route("/")
    .get((req, res) =>{ 
        reviewModel.find(req.query, (err, reviews) =>{
            if (err){
                res.status(500).send(err);
            } else if (reviews.length === 0){
                res.status(404).send({message: "FILE NOT FOUND"})
            } else {
                res.status(200).send({message: "SUCCESSFUL GET REQUEST", data: reviews})
            }
        })
    })
    .post((req, res) =>{
        let review = new reviewModel(req.body)
        review.save((err, review) =>{
            if (err){
                res.status(500).send(err)
            } else {
                res.status(200).send({message: "SUCCESSFUL POST", data: review})
            }
        
        })
    })


    reviewRoute.route("/:id")
        .delete((req, res) =>{
            reviewModel.findByIdAndRemove(req.params.id, (err, review) =>{
                if (err){
                    res.status(500).send(err);
                } else if (review === null){
                    res.status(404).send({message: "FILE NOT FOUND"})
                } else {
                    res.status(200).send({message: "ITEM SUCCESSFULLY DELETED", data: review})
                }  
            })
        })
        .put((req, res) =>{
            reviewModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, review) =>{
                if (err){
                    res.status(500).send(err)
                } else if (review === null){
                    res.status(404).send({message: "FILE NOT FOUND"})
                }
                else {
                    res.status(200).send({message: "ITEM SUCCESSFULLY UPDATED", data: review})
                }
            })
        })
        .get((req, res) => {
            reviewModel.findById(req.params.id, (err, review) =>{
                if (err){
                    res.status(500).send(err)
                } else if (review === null){
                    res.status(404).send({message: "FILE NOT FOUND"})
                }
                else {
                    res.status(200).send({message: "SUCCESSFULL GET REQUEST", data: review})
                }
            })
        })
        
        


// REQUIRED/// 
// type    //
// author  //
// artist  //
// rating  //
// review  //
////////////

module.exports = reviewRoute