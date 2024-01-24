const mongoose = require('mongoose');
//defining schema
const {Schema} = mongoose;
const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    passwords:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        required:true,
        default:Date.now
    },
});
module.exports = mongoose.model('User',UserSchema);