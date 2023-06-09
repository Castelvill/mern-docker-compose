const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        text: { type: String },
        image: { type: String }
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)
//or: export default mongoose.models.movies || mongoose.model('movies', Movie)