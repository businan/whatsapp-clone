const mongoose = require("mongoose");


const ConnectData = async () => {
    const connection_url = process.env.REACT_APP_CONNECTION_URL
// const connection_url = "mongodb+srv://chatapp:123456789deneme@cluster0.gghud.mongodb.net/test"
    try{
        await mongoose.connect(connection_url, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
        });
        console.log("Succesfully connected to DB");
    }
    catch (error) {
        console.log("Error while connecting DB", error)
    }
};

module.exports = ConnectData;