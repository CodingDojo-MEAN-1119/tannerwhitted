const mongoose = require('mongoose')
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
        trim: true,
    }
}, {timestamps: true})
module.exports = mongoose.model('Person', PersonSchema);