const app = require('./app')
const connectDatabase = require('./config/database')
const dotenv = require('dotenv')
//setting up config file
dotenv.config({ path: 'backend/config/config.env' })
connectDatabase();
app.listen(process.env.PORT, () => {
    console.log(`server is started on static port `, process.env.PORT)
})

