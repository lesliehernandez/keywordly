const Project = require('../models/project')
const User = require('../models/user')


module.exports.getProjects = (user, cb) => {
    Project.find({created_by: user})
    .exec((err, projects) => {
        if(err) throw err
        cb(null, projects)
    })
    
}

module.exports.createProject = (data, user, cb) => {
    const project = new Project({
        name: data.name,
        created_by: user,
        client: {
           info: {
               domain: data.domain
           } 
        }
    })
    project.save(cb)
}

module.exports.updateProject = (data, user) => {

}

module.exports.deleteProject = (data, user) => {

}