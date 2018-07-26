const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const ProjectSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    created_by:{type: Schema.Types.ObjectId, ref: 'User'},
    clientInfo: {
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
        }]
    },
    clientData: {
        type: Object
    },
    competitors: [{
        type: Object
    }],
    reports:[ {
        name: {
            type: String
        },
        createdAt:{
            type: Date,
            default: Date.now,
        } ,
        organicResearch: {type:Object},
        keywordSummary: {type:Object},
        brandedSummary: {type:Object},
        keywordBrackets:[{type: Object}],
        rankingOpps: {type: Object},
        trafficDrivers: {type: Object}
    }]
}, { timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}})

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