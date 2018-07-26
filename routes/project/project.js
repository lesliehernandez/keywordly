const router = require("express").Router();
const ProjectsController = require('../../controllers/projectsController');
const UserController = require('../../controllers/usersController');
const fs = require('fs');
const path = require('path');


router.post('/new/:userId', (req, res) => {
    let user = req.params.userId
    let info = req.body
    UserController.getUserById(user, (err, u) => {
        if(err) res.json(err)
        ProjectsController.createProject(info, user, (err, project) => {
            if(err) res.json(err)
            ProjectsController.getData(project.clientInfo.domain, project._id, (err, data) => {
                if(err) res.json(err)
                console.log(data);
                res.json(project)
            })
        })
    })
});

router.get('/download/:projectId/:reportId', (req, res) => {
    console.log(req.params)
    ProjectsController.getProjectById(req.params.projectId, (err, project) => {
        if(err) throw err
        ProjectsController.getReport(req.params.projectId, req.params.reportId, (err, data) => {
            if(err) throw err
            console.log(data);
            // fs.writeFile(`summary${project.name}.csv`, data)
            // res.send(data)
            fs.writeFile(project.name + ".csv", data, function (err) {
              if (err) {
                return res.json(err).status(500);
              }
              else {
                  return res.json("/exports/csv-" + project.name + ".csv");
              }
            })
        })
    })
})

router.post('/branded/:projectId', (req, res) => {
    console.log('You hit the Branded Route');
    console.log('------------------------------');
    ProjectsController.summaryBuilder(req.params.projectId, req.body, (err, results) => {
        if(err) throw err
        console.log(results);
        res.json(results)
    })
});

router.get('/user/:id', (req, res) => {
    ProjectsController.getProjects(req.params.id, (err, projects) => {
        if(err){
            res.send(err)
        }
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





module.exports = router;