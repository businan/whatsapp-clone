// const Messages = require("../models/Messages");

// exports.getMessages = async (req,res) => {
//     try {
//         const Messages = await Messages.find(data);
//             res.status(200).send(data)
//         }
//     catch (error){
//        return res.status(500).send(error)
//     }
// }
// //     }
// //         const Messages = await Messages.find((err, data) => {
// //         if (err) {
// //             res.status(500).send(err)
// //         } else {
// //             res.status(200).send(data)
// //         }
// //     })
// // }

// exports.addMessage = (req, res) => {
//     const dbMessage = req.body
//     try {
//         const messages = Messages.create(dbMessage, (data));
//         res.status(201).send(`new message created: \n ${data}`)
//     }
//     catch (error) {
//         res.status(500).send(error)
//     }

// //     Messages.create(dbMessage, (err, data) => {
// //         if (err) {
// //             res.status(500).send(err)
// //         } else {
// //             res.status(201).send(`new message created: \n ${data}`)
// //         }
// //     })
// }

const Messages = require("../models/Messages");

exports.getMessages = async (req, res) => {
    try {
        const allMessages = await Messages.find({});
        res.status(200).json(allMessages)
    } catch (error) {
        return res.status(500).json({ errors: [{ message: error.message }] });
    }
};

exports.addMessage = async (req, res) => {
    try {
        const { message, name, timestamp, received } = req.body;

        const newMassage = new Messages({
            message,
            name,
            timestamp,
            received
        });

        const addedMessage = await newMassage.save({ new: true });
        res.status(201).json(addedMessage);

    } catch (error) {
        return res.status(500).json({ errors: [{ message: error.message }] });
    }
}; 