const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    typeMovie: {
        type:String
    },
    image: {
        type:String,
        default:"https://upload.wikimedia.org/wikipedia/commons/5/56/ABC_%282013%29_Dark_Grey.svg"
    },
    rating:{
        type:Number
    }
})


module.exports = mongoose.model('Movie', movieSchema)


