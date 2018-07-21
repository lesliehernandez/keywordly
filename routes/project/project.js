const router = require("express").Router();
const ProjectsController = require('../../controllers/projectsController')
const UserController = require('../../controllers/usersController')



router.post('/new', (req, res) => {
    let user = req.body.user.user
    let info = req.body.info
    UserController.getUserById(user, (err, u) => {
        console.log(u); 
        if(err) throw err
        ProjectsController.createProject(info, u._id, (err, project) => {
            if(err) throw err
            console.log(project)
            res.send(res.status)
        })
    })
    
});

router.get('/user/:id', (req, res) => {
    console.log(req.params.id);
    ProjectsController.getProjects(req.params.id, (err, projects) => {
        if(err) throw err
        console.log(projects);
        res.json(projects)
    })
})

router.post('/update', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

router.delete('/delete/:id', (req, res) => {
    res.send({ express: 'Hello From Express' });
});




module.exports = router;