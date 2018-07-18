const path = require("path");
const router = require("express").Router();
const usersController = require('../../controllers/usersController');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;



passport.use(new LocalStrategy({
    usernameField: 'email',
     passwordField: 'password'
    },
    (email, password, done) => {
        usersController.getUserByEmail(email, (err, user) => {
            if(err) throw err
            if(!user) return done(null, false, {message: 'User not found'})
            usersController.comparePassword(password, user.password, (err, isMatch) => {
                if(err) throw err
                if(isMatch){
                    return done(null, user)
                } 
                else return done(null, false, {message: 'Invalid Password'})
            })
        })
}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    usersController.getUserById(id, (err, user) => {
        done(err, user)
    })
})

router.post('/login', passport.authenticate('local', {failureFlash: true}), (req, res) => {    
    req.flash('success_msg', 'You are now logged in')
    res.send(res.json());
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

router.get('/logout', (req, res) => {
    req.logout()
    res.flash('success_msg', 'You are logged out')
})


module.exports = router;