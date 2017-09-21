const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    songName: {
        type: String,
        required: false
    },
    albumName: {
        type: String,
        required: false
    },
    artist: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: false
    },
    amazonLink: {
        type: String,
        required: false
    },
    youtubeLink: {
        type: String,
        required: false
    },
    
})

const reviewModel = mongoose.model("reviews", reviewSchema);

module.exports = reviewModel;



////////IDEAS///////////////////////////////////
// 1."bestOf" type that we can filter////////// 
// and put into another array so we can display// 
// the best of the year on another page"///////
/////////////