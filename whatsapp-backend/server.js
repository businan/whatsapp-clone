const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");
const dbConnect = require("./models/dbConnect");
const router = require('./routes/router');
const pusher = require("./helpers/Pusher");
require('dotenv').config();


dbConnect();


const port = process.env.PORT || 9000


app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(port, () => console.log(`Listening on localhost: ${port}`))



