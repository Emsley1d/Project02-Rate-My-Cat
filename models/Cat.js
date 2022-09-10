const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    favourites: String,
    dislikes: String,
    catComment: String,
    location: String, //drop down of counties? best place to put location vs in user??
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    image: String,
    rating: String
}, { timestamps: true })

const Cat = mongoose.model("Cat", catSchema);

module.exports = {Cat};