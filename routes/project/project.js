const router = require("express").Router();
const ProjectsController = require('../../controllers/projectsController')
const UserController = require('../../controllers/usersController')



router.post('/new', (req, res) => {
    let user = req.body.user
    let info = req.body.info
    ProjectsController.createProject(info, user, (err, project) => {
        if(err) throw err
        console.log(project)
        res.send(res.status)
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