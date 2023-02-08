const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: [true, 'Please provide product name'],
        trim: true,
        maxLenght: [100, "Product Name length is more than 100 character.."]
    },
    Color: {
        type: String,
        required: [true, "Please provide Color of Product..."]
    },
    Category: {
        type: String,
        required: [true, "Please provide the Category of product"],
        trim: true,
        maxLenght: [50, "Kindly reduce the length of Category it's more than 50 character"]
    },
    Price: {
        type: Number,
        required: [true, "Kindly provide Price in digits"],
    },
})
module.exports = mongoose.model(`data`, dataSchema);