const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    id : {type:String},
    name:{type: String},
    img : {type: String},
    

},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("food", foodSchema)