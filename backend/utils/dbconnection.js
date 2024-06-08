const mongoose = require('mongoose');
require('dotenv').config();

const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Mongodb successfully");
    } catch (error) {
        console.log("Failed to connect to mongodb", error);
    }
}

module.exports = dbconnection;

