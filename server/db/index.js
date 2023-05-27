//const mongoServer = require('mongodb-memory-server')
//const mongoUri = mongoServer.mongoUri
const mongoose = require('mongoose')
//'mongodb://mongo:27017/cinema'
mongoose
    //.connect(mongoUri, { dbName: "cinema", useNewUrlParser: true })
    .connect('mongodb://mongo:27017/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db