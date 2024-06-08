const mongoose=require('mongoose')

const caseSchema = new mongoose.Schema({
    case: {
        type: String
    }
})

const casedb = mongoose.model('Case', caseSchema)

module.exports = casedb;

