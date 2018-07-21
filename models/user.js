const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const UserSchema = Schema({
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
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}]
})

const User = module.exports = mongoose.model('User', UserSchema);