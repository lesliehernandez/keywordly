const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    client: {
        info: {
            domain: {
                type: String,
                required: true
            },
            branded: [{
                word:{type: String},
                include:{type: Boolean}
            }],
            Keyword: [{
                word:{type: String},
                include:{type: Boolean}
            }],
        },
        organic_research: [{}]
    }
})

// const ProjectSchema = mongoose.Schema({
//     name: {
//         client: {
//             domain_name: {
//                 info: {
//                     domain: {},
//                     branded_terms: {
//                         include: {},
//                         exclude: {}
//                     },
//                     search_terms: {
//                         include: {},
//                         exclude: {}
//                     }
//                 },
//                 backlinks_overview: {
    
//                 },
//                 serp_overview: {
    
//                 },
//                 traffic_overview: {
    
//                 },
//                 organic_research: {
    
//                 }
//             }
//         },
//         competitors: {
//             domain_name: {
//                 info: {
//                     domain: {},
//                     branded_terms: {
//                         include: {},
//                         exclude: {}
//                     },
//                     search_terms: {
//                         include: {},
//                         exclude: {}
//                     }
//                 },
//                 backlinks_overview: {
    
//                 },
//                 serp_overview: {
    
//                 },
//                 traffic_overview: {
    
//                 },
//                 organic_research: {
    
//                 }
//             }
//         },
//         reports: {
//             date: {

//             }
//         }
//     }
// })

const Project = module.exports = mongoose.model('Project', ProjectSchema);