const mongoose = require('mongoose')
const connectDatabase = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_PATH, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDb is connected with live DB : ${con.connection.host}`)
    })
}
module.exports = connectDatabase