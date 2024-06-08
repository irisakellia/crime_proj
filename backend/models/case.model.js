const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    caseName:{
        type:String,
        required:true,
    }
});

const Case = mongoose.model('Cases', caseSchema);

module.exports = Case;