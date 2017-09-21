const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true   
    },
    bountyAmt: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: false
    }

})

const bountyModel = mongoose.model("bounties", bountySchema);

module.exports = bountyModel;

// REQUIRED/// 
// type    //
// author  //
// artist  //
// rating  //
// review  //
////////////