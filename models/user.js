const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    projects: {
        type: Schema.ObjectId,
        ref: 'Project'
    }
})

const User = module.exports = mongoose.model('User', UserSchema);