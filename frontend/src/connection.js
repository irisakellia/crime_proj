const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/')
const db = mongoose.connection

db.on('error' , (err) => {
    console.error('mongo error:' ,err)
})

db.once('open',() =>{
    console.log("database connection established")
})