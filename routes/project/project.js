const router = require("express").Router();
const ProjectsController = require('../../controllers/projectsController')
const UserController = require('../../controllers/usersController')


router.post('/new/:userId', (req, res) => {
    let user = req.params.userId
    let info = req.body
    UserController.getUserById(user, (err, u) => {
        if(err) throw err
        ProjectsController.createProject(info, u._id, (err, project) => {
            if(err) throw err
            ProjectsController.getData(project.clientInfo.domain, project._id, (err, data) => {
                if(err) throw err
                console.log(data);
                res.json(project)
            })
        })
    })
    
});

router.get('/user/:id', (req, res) => {
    ProjectsController.getProjects(req.params.id, (err, projects) => {
        if(err) throw err
        console.log(projects);
        res.json(projects)
    })
})

router.get('/data/:domain/:projectId', (req, res) => {
    console.log(req.params.domain);
    console.log(req.params.projectId);
    ProjectsController.getData(req.params.domain, req.params.projectId, (err, data) => {
        if(err) throw err
        console.log(data);
        res.json(data);
    })
})

router.post('/update', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

router.delete('/delete/:id', (req, res) => {
    res.send({ express: 'Hello From Express' });
});




module.exports = router;