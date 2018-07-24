const CREDS = require('./credentials')
const async = require('async')
const fetch = require('node-fetch')


async function getSiteTraffic(domain){    
    const api = `https://us.backend.semrush.com/?jsoncallback=jQuery21406104401535007462_1531375701589&key=${CREDS.key}&domain=${domain}&display_hash=8996ebe1e40d9592c231c83372abc37a&action=report&type=domain_rank&currency=usd&_=1531375701590`
    return await fetch(api).then(res => res.text())
}

async function getBacklinks(domain){
    const api = `https://bl.backend.semrush.com/?key=${CREDS.key}&target=${domain}&type=backlinks_overview&method=nojsonp&target_type=root_domain&export_columns=backlinks_anchors%2Cdomains_num%2Chosts_num%2Ctexts_num%2Curls_num%2Cips_num%2Cipclassc_num%2Cgeodomains%2Czones%2Cfollows_num%2Cforms_num%2Cframes_num%2Cimages_num%2Cbacklinks%2Cbacklinks_pages%2Cbacklinks_refdomains`
    return await fetch(api).then(res => res.json())
}

function organicResearch(domain, total){
    let maxPages = Math.ceil(total / 100 ),
        urls = []
    for(let i = 0; i < maxPages; i++){
        urls.push(`https://us.backend.semrush.com/?jsoncallback=jQuery21406711255885730696_1530769593018&key=45c6a19938a9a631ae433fb176c7ad8b&domain=${domain}&action=report&type=domain_organic&method=nojsonp&display_sort=po_asc&display_filter=&currency=usd&display_page=${i}&_=1530769593019`)
    }
    return new Promise((resolve, reject) => {
        let organicResearch = []
        async.mapSeries(urls, async (url) => {
            await fetch(url).then(res => res.text())
            .then(data => {
                let tempData = JSON.parse(data.slice(data.indexOf('(') + 1, data.lastIndexOf(')')))
                for(let i in tempData.organic.data){
                    organicResearch.push(tempData.organic.data[i]);
                }
            })
        }, (err, results) => {
            if(err) reject('Something went wrong')    
            resolve(organicResearch)
        })
    })
}

function getTrafficAndBacklinks(domain){    
    return Promise.all([getSiteTraffic(domain), getBacklinks(domain)])
}

function getDataForDomains(a){
    let domains = new Object(), 
        multiple;
    if(a.length > 1){
        multiple = true
    }  
    else {
        multiple = false
    }
    return new Promise((resolve, reject) => {
        for(let i = 0; i < a.length; i++){
            getTrafficAndBacklinks(a[i])
            .then(([traffic, backlinks]) => {
                let backlinkData = backlinks
                let trafficData = JSON.parse(traffic.slice(traffic.indexOf('(') + 1, traffic.lastIndexOf(')')))
                organicResearch(trafficData.rank.domain, trafficData.rank.data[0].Or)
                .then(orData => {
                    let organicResearchData = orData
                    let domain = trafficData.rank.domain
                    domains[domain] = {
                        traffic: {
                            keywords: trafficData.rank.data[0].Or,
                            total: trafficData.rank.data[0].Ot,
                            costs: trafficData.rank.data[0].Oc
                        },
                        serp: {
                            siteLinks: trafficData.rank.data[0].Fl.slice(trafficData.rank.data[0].Fl.indexOf('21:') + 3, trafficData.rank.data[0].Fl.length ),
                            knowledgePanel: trafficData.rank.data[0].Fl.slice(trafficData.rank.data[0].Fl.indexOf('2:') + 2, trafficData.rank.data[0].Fl.indexOf('4:') -1 ),
                            localPack: trafficData.rank.data[0].Fl.slice(trafficData.rank.data[0].Fl.indexOf('4:') + 2, trafficData.rank.data[0].Fl.indexOf('6:') -1 ),
                            images: trafficData.rank.data[0].Fl.slice(trafficData.rank.data[0].Fl.indexOf('6:') + 2, trafficData.rank.data[0].Fl.indexOf('21:') -1 )
                        },
                        backlinks: {
                            domains: backlinkData.data.domains,
                            total: backlinkData.data.total,
                            ip: backlinkData.data.ip,
                            authorityScore: backlinkData.data.ascore
                        },
                        organicResearch: organicResearchData
                    }
                    if(multiple){
                        if(i === 1){
                            resolve(domains)
                        }
                        else{
                            reject('Something went wrong')
                        }
                    }
                    else{
                        if(i === 0){
                            resolve(domains)
                        }
                        else{
                            reject('Something went wrong')
                        }

                    }
                })             
            })
        }
    })
}

// Run Test Function
// -------------------
// getDataForDomains(['purplerockscissors.com', 'osagepartners.com'])
// .then(data => {
//     console.log(data);
    
// })

module.exports = getDataForDomains