const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const UserSchema = Schema({
    password: {
        type: String
    },
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}]
})

const User = module.exports = mongoose.model('User', UserSchema);