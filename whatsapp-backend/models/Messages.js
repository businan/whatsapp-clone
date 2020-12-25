const mongoose = require("mongoose");

//const { Schema } = mongoose;
// const whatsappSchema = new Schema({..})

const whatsappSchema = mongoose.Schema({
    // message: String,
    // name: String,
    // timestamp: String,
    // received: Boolean 
    message: {
        type: String, 
    }, 
    name: {
        type: String, 
    },
    timestamp: {
        type: String,
    },
    received: {
        type: Boolean,
    }
})

//collection

module.exports = Messages= mongoose.model("messagecontent", whatsappSchema)