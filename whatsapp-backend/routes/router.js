const express = require("express");
const router = express.Router();
const MessageRouter = require("./MessageRouter");

router.use("/messages", MessageRouter);

// export default router;
module.exports = router;