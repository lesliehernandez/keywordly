const router = require("express").Router();
const ProjectsController = require('../../controllers/projectsController')

checkAuth = (req, res, next) => {
    console.log(req);
    console.log(res.locals);
    
    console.log('Checking auth');
    
    if(req.isAuthenticated()) return next();
    else {
        req.flash('error_msg', 'Your are not logged in')
        res.json(res);
    }
}

router.post('/new', checkAuth, (req, res) => {
    ProjectsController.createProject(req.body, req.user)
});

router.post('/update', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

router.delete('/delete/:id', (req, res) => {
    res.send({ express: 'Hello From Express' });
});




module.exports = router;