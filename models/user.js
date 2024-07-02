const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String },
    phoneNumber: { type: String },
    gender: { type: String },
})

const UserData = mongoose.model('UserData', userSchema);
module.exports = UserData;