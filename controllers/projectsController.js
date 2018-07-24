const Project = require('../models/project')
const User = require('../models/user')
const reportsBuilder = require('../reportsBuilder/getData')
const tableBuilder = require('../reportsBuilder/buildTables')


module.exports.getProjects = (user, cb) => {
    Project.find({created_by: user})
    .exec((err, projects) => {
        if(err) throw err
        cb(null, projects)
    })
}

module.exports.getData = (domain, projectId, cb) => {
    let domainArr = []
    domainArr.push(domain)
    
    let domainData = reportsBuilder(domainArr)
    .then(siteData => {
        Project.findByIdAndUpdate(projectId, { $set:{
            clientData: siteData
        }}, (err, result) => {
            if(err) throw err
            console.log(result);
            cb(null, siteData)
        })
    })
}

module.exports.summaryBuilder = (projectId, query, cb) => {
    console.log(query);
    
    Project.findByIdAndUpdate(projectId, {$push : {
        'clientInfo.branded': {
            word: query.word,
            include: query.include
        }
    }}, (err, results) => {
        if(err) throw err
        Project.findById(projectId, (err, project) => {
            if(err) throw err
            let words = []
            let orData = project.clientData[project.clientInfo.domain].organicResearch
            project.clientInfo.branded.forEach(term => {
                word = term.word.replace(/\s/g,'')
                words.push(word.split(','))
            })
            tableBuilder.branded(orData, words[0])
            .then(brandedSummary => {
                console.log(brandedSummary);
                cb(null, {projects, brandedSummary})
                
            })
        })
    })
}

module.exports.createProject = (data, user, cb) => {
    const project = new Project({
        name: data.name,
        created_by: user,
        clientInfo: {
            domain: data.domain
        }
    })
    project.save(cb)
}

module.exports.updateProject = (data, projId) => {
    Project.findById(projId)
    .exec((err, project) => {
           
    })

}

module.exports.deleteProject = (data, user) => {

}