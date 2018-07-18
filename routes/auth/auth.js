const path = require("path");
const router = require("express").Router();
const usersController = require('../../controllers/usersController')

router.get('/login', (req, res) => {
    res.send({ express: 'login' });
});

router.post('/signup', (req, res) => {
    const name = req.body.name,
        email = req.body.email,
        password = req.body.password,
        passwordMatch = req.body.passwordMatch

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('passwordMatch', 'Passwords do not match').equals(req.body.password);
    const errors =  req.validationErrors();

    console.log(name);
    console.log(email);
    console.log(password);
    
    if(errors){
        console.log('Yes');
        res.send(errors)
    }
    else{
        console.log('No');
        const newUser = {
            name: name,
            email: email,
            password: password
        }
        usersController.createUser(newUser, (err, user) => {
            if(err) throw err
            console.log(user);            
        })

        req.flash('success_msg', 'You are signed up and can now login');
        res.redirect('/auth/login');

    }



});


module.exports = router;