const router = require("express").Router();
const usersController = require('../../controllers/usersController');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

const jwtMW = exjwt({
    secret: 'keyboard cat 4 ever'
})


router.post('/login', (req, res) => {    
    const { email, password } = req.body

    usersController.getUserByEmail(email, (err, user) => {
        if(err) throw err
        if(!user) return res.json(false)
        usersController.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err
            if(isMatch){
                let token = jwt.sign({user: user.email}, 'keyboard cat 4 ever', {expiresIn: 129600});
                res.json({
                    success: true,
                    err: null,
                    token
                })
            }
            else {
                res.status(401).json({
                    success: false,
                    token: null,
                    err: 'Entered Password and Hash do not match!'
                })
            }
        })
    })
});

router.post('/signup', (req, res) => {
    console.log(req.body);
    
    const { name, email, password } = req.body

    const newUser = {
        name: name,
        email: email,
        password: password
    }

    usersController.createUser(newUser, (err, user) => {
        if(err) throw err
        console.log(user);            
    })
});

router.get('/logout', (req, res) => {
    req.logout()
    res.flash('success_msg', 'You are logged out')
})

router.get('/', jwtMW, (req, res) => {
    res.send('You are authenticated');
})

module.exports = router;