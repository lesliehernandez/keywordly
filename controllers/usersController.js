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