const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const newData = require('./Routes/data.js')
app.use('/api/v1', newData)

module.exports = app