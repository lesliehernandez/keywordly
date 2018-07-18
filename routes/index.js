const path = require("path");
const router = require("express").Router();

checkAuth = (req, res, next) => {
    if(req.isAuthenticated()) return next();
    else {
        req.flash('error_msg', 'Your are not logged in')
        res.redirect('auth/login');
    }
}

router.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});


module.exports = router;