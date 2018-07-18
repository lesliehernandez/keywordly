const User = require('../models/user')
const bcrypt = require('bcrypt');

module.exports.createUser = (newUser, cb) => {
    const user = new User({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
    })
    
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash
            user.save(cb)
        })
    })
}

module.exports.getUserByEmail = (email, cb) => {
    const query = {email: email}
    User.findOne(query, cb)
}

module.exports.comparePassword = (candidatePassword, hash, cb) => {    
    bcrypt.compare(candidatePassword, hash, (err, salt) => {
        if(err) throw err
        cb(null, salt)
    })
} 

module.exports.getUserById = (id, cb) => {
    User.findById(id, cb)
}