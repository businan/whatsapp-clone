const mongoose = require("mongoose");
const Pusher = require("pusher");
require("dotenv").config();

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: "mt1",
    useTLS: true
});


const db = mongoose.connection
db.once("open", () => {
    console.log("DB connected-pusher");

    const msgCollection = db.collection("messagecontents");

    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {

        console.log("A change occured", change);

        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            });
        } else {
            console.log("Error triggering Pusher")
        }
    })
})


module.exports = pusher;