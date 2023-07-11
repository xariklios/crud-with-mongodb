const mongoose = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();

exports.connection = () => {
    return mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
        });

}
