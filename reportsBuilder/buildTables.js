const getData = require('./getData')
//const d3 = require('d3')
const d3 = require('d3-collection')
const fs = require('fs')

// Database 
// pulls cliet and competitors

// include/excludes
//  {
//      word: 'something'
//      include: true
//  }
//  {
//      word: 'something'
//      include: false 
//  }
/*
- project_name_date
    - client
        - domain_name
             - info
                - domain
                - branded_terms 
                    - include
                    - exclude
            - organic_research
            - backlinks_overview
            - serp_overview
            - traffic_overview
    - competitors
        - domain_name
            - info
                - domain
                - branded_terms 
                    - include
                    - exclude
            - organic_research
            - backlinks_overview
            - serp_overview
            - traffic_overview
        - domain_name
            - info
                - domain
                - branded_terms 
                    - include
                    - exclude
            - organic_research
            - backlinks_overview
            - serp_overview
            - traffic_overview
*/

//var domains = ['purplerockscissors.com', 'osagepartners.com', 'laritzagarcia.com']
let client = ['purplerockscissors.com'],
    competitors = ['osagepartners.com', 'laritzagarcia.com']

// getData(domains)
// .then(data => {
//     console.log(data[domains[0]].organicResearch)
//     summary(data[domains[0]].organicResearch) 
//     .then(summary => {
//         console.log(summary)
//         branded(data[domains[0]].organicResearch, ['purple'])
//         .then(branded => {
//             console.log(branded)
//             keywords(data[domains[0]].organicResearch, ['paper'])
//             .then(keyword => {
//                 console.log(keyword) 
//             })
//         })
//     })
// })

/*

let clientData = getData(client)
.then(siteOverview => {
    console.log('========================');
    console.log('Site Overview');
    console.log('Will be saved in the Database');
    console.log('========================');
    console.log(siteOverview);
    let workingData = siteOverview[client[0]].organicResearch
    console.log(workingData.length);
    console.log('========================');
    summary(siteOverview[client[0]].organicResearch)
    .then(summary => {
        console.log('========================');
        console.log('Summary Bracket');
        console.log('Will not be saved in the Database');
        console.log('========================');
        console.log(summary);
        console.log('========================');
        branded(siteOverview[client[0]].organicResearch, ['prpl', 'purple rock scissors'])
        .then(branded1 => {
            console.log('========================');
            console.log('Branded Bracket');
            console.log('Will not be saved in the Database');
            console.log('========================');
            console.log(branded1);
            console.log('========================');
            branded(siteOverview[client[0]].organicResearch, ['prpl', 'purple rock scissors'])
            .then(branded2 => {
                console.log('========================');
                console.log('Branded Bracket');
                console.log('Will not be saved in the Database');
                console.log('========================');
                console.log(branded2);
                console.log('========================');
                rankingOpportunities(siteOverview[client[0]].organicResearch, ['prpl', 'purple rock scissors'])
                .then(ranking => {
                    console.log('========================');
                    console.log('Ranking Opportunities');
                    console.log('Will not be saved in the Database');
                    console.log('========================');
                    //console.log(ranking);
                    console.log(ranking.length);
                    console.log('========================');
                    trafficDrivers(workingData, ['purple rock scissors', 'prpl'])
                    .then(traffic => {
                        console.log('========================');
                        console.log('Traffic Drivers');
                        console.log('Will not be saved in the Database');
                        console.log('========================');
                        //console.log(traffic);
                        console.log(traffic.length);
                        console.log('========================');
                    })
                })
            })
        })
    })
    
})
*/
/*
let competitor1Data = getData(competitors[0])
.then(siteOverview => {
    console.log('========================');
    console.log('Site Overview');
    console.log('Will be saved in the Database');
    console.log('========================');
    console.log(siteOverview);
    console.log('========================');
    summary(siteOverview[client[0]].organicResearch)
    .then(summary => {
        console.log('========================');
        console.log('Summary Bracket');
        console.log('Will be saved in the Database');
        console.log('========================');
        console.log(summary);
        console.log('========================');
        branded(siteOverview[client[0]].organicResearch, ['osage'])
        .then(branded1 => {
            console.log('========================');
            console.log('Branded Bracket');
            console.log('Will be saved in the Database');
            console.log('========================');
            console.log(branded1);
            console.log('========================');
            branded(siteOverview[client[0]].organicResearch, ['osage partners'])
            .then(branded2 => {
                console.log('========================');
                console.log('Branded Bracket');
                console.log('Will be saved in the Database');
                console.log('========================');
                console.log(branded2);
                console.log('========================');
            })
        })
    })
    
}) h 

let competitor2Data = getData(competitors[1])
.then(siteOverview => {
    console.log('========================');
    console.log('Site Overview');
    console.log('Will be saved in the Database');
    console.log('========================');
    console.log(siteOverview);
    console.log('========================');
    summary(siteOverview[client[0]].organicResearch)
    .then(summary => {
        console.log('========================');
        console.log('Summary Bracket');
        console.log('Will be saved in the Database');
        console.log('========================');
        console.log(summary);
        console.log('========================');
        branded(siteOverview[client[0]].organicResearch, ['laritza'])
        .then(branded1 => {
            console.log('========================');
            console.log('Branded Bracket');
            console.log('Will be saved in the Database');
            console.log('========================');
            console.log(branded1);
            console.log('========================');
            branded(siteOverview[client[0]].organicResearch, ['laritza garcia'])
            .then(branded2 => {
                console.log('========================');
                console.log('Branded Bracket');
                console.log('Will be saved in the Database');
                console.log('========================');
                console.log(branded2);
                console.log('========================');
            })
        })
    })
    
})
*/





































function summary(data){
    let tempArr = [], a = [], b =[], c= [], d = [], e = [], summaryBracket = {}
    
    data.forEach(item => {
        tempArr.push(item)
        if(parseInt(item.Po) < 4){
            a.push(item)
        }
        if((parseInt(item.Po) > 3) && (parseInt(item.Po) < 11)){
            b.push(item)
        }
        if((parseInt(item.Po) > 10) && (parseInt(item.Po) < 21)){
            c.push(item)
        }
        if((parseInt(item.Po) > 20) && (parseInt(item.Po) < 51)){
            d.push(item)
        }
        if((parseInt(item.Po) > 50) && (parseInt(item.Po) < 101)){
            e.push(item)
        }
    })

    return new Promise((resolve, reject) => {
        getCount(tempArr)
        .then(count => {
            getSum(tempArr, 'Nq')
            .then(search => {
                getSum(tempArr, 'Tr')
                .then(traffic => {
                    summaryBracket.totals = [count, search, undefined, traffic.toFixed(2)]
                })
            })
        })
        getAvg(tempArr, 'Po')
        .then(poSum => {
            getAvg(tempArr, 'Nq')
            .then(nqSum => {
                getAvg(tempArr, 'Kd')
                .then(kdSum => {
                    getAvg(tempArr, 'Tr')
                    .then(trSum => {
                        summaryBracket.avg = [poSum, nqSum, kdSum, trSum] 
                    })
                })
            }) 
        })
        getCount(a)
        .then(count => {
            getSum(a, 'Nq')
            .then(search => {
                getAvg(a, 'Kd')
                .then(competition => {
                    getAvg(a, 'Tr')
                    .then(traffic => {
                        summaryBracket.top3 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(b)
        .then(count => {
            getSum(b, 'Nq')
            .then(search => {
                getAvg(b, 'Kd')
                .then(competition => {
                    getAvg(b, 'Tr')
                    .then(traffic => {
                        summaryBracket.top410 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(c)
        .then(count => {
            getSum(c, 'Nq')
            .then(search => {
                getAvg(c, 'Kd')
                .then(competition => {
                    getAvg(c, 'Tr')
                    .then(traffic => {
                        summaryBracket.top1120 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(d)
        .then(count => {
            getSum(d, 'Nq')
            .then(search => {
                getAvg(d, 'Kd')
                .then(competition => {
                    getAvg(d, 'Tr')
                    .then(traffic => {
                        summaryBracket.top2150 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(e)
        .then(count => {
            getSum(e, 'Nq')
            .then(search => {
                getAvg(e, 'Kd')
                .then(competition => {
                    getAvg(e, 'Tr')
                    .then(traffic => {
                        summaryBracket.top51100 = [count, search, competition, traffic]
                        resolve(summaryBracket)
                    })
                })
            })
        })
    })
}

function branded(data, words){
    let tempArr = [], branded = [], a = [], b =[], c= [], d = [], e = [], brandedBracket = {}
    data.forEach(key => {
        tempArr.push(key)
    })
    words.forEach(word => {
        tempArr.forEach(item => {
            if((new RegExp(word)).test(item.Ph)){
                branded.push(item)
                tempArr.pop(item)
            }
        })
    })
    branded.forEach(key => {
        if(parseInt(key.Po) < 4){
            a.push(key)
        }
        if((parseInt(key.Po) > 3) && (parseInt(key.Po) < 11)){
            b.push(key)
        }
        if((parseInt(key.Po) > 10) && (parseInt(key.Po) < 21)){
            c.push(key)
        }
        if((parseInt(key.Po) > 20) && (parseInt(key.Po) < 51)){
            d.push(key)
        }
        if((parseInt(key.Po) > 50) && (parseInt(key.Po) < 101)){
            e.push(key)
        }
    })
    return new Promise((resolve, reject) => {
        brandedBracket.brandedTerms = words
        getCount(tempArr)
        .then(count => {
            getSum(tempArr, 'Nq')
            .then(search => {
                getAvg(tempArr, 'Kd')
                .then(kdAvg => {
                    getSum(tempArr, 'Tr')
                    .then(traffic => {
                        brandedBracket.unbranded = [count, search, kdAvg, traffic.toFixed(2)]
                    })
                })
            })
        })
        getCount(branded)
        .then(count => {
            getSum(branded, 'Nq')
            .then(search => {
                getAvg(branded, 'Kd')
                .then(kdAvg => {
                    getSum(branded, 'Tr')
                    .then(traffic => {
                        brandedBracket.branded = [count, search, kdAvg, traffic.toFixed(2)]
                    })
                })
            })
        })
        getCount(a)
        .then(count => {
            getSum(a, 'Nq')
            .then(search => {
                getAvg(a, 'Kd')
                .then(competition => {
                    getAvg(a, 'Tr')
                    .then(traffic => {
                        brandedBracket.top3 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(b)
        .then(count => {
            getSum(b, 'Nq')
            .then(search => {
                getAvg(b, 'Kd')
                .then(competition => {
                    getAvg(b, 'Tr')
                    .then(traffic => {
                        brandedBracket.top410 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(c)
        .then(count => {
            getSum(c, 'Nq')
            .then(search => {
                getAvg(c, 'Kd')
                .then(competition => {
                    getAvg(c, 'Tr')
                    .then(traffic => {
                        brandedBracket.top1120 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(d)
        .then(count => {
            getSum(d, 'Nq')
            .then(search => {
                getAvg(d, 'Kd')
                .then(competition => {
                    getAvg(d, 'Tr')
                    .then(traffic => {
                        brandedBracket.top2150 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(e)
        .then(count => {
            getSum(e, 'Nq')
            .then(search => {
                getAvg(e, 'Kd')
                .then(competition => {
                    getAvg(e, 'Tr')
                    .then(traffic => {
                        brandedBracket.top51100 = [count, search, competition, traffic]
                        resolve(brandedBracket)
                    })
                })
            })
        })
    })
}

function keywords(data, words){
    let tempArr = [], branded = [], a = [], b =[], c= [], d = [], e = [], keywordBracket = {}
    data.forEach(key => {
        tempArr.push(key)
    })
    words.forEach(word => {
        tempArr.forEach(item => {
            if((new RegExp(word)).test(item.Ph)){
                branded.push(item)
                tempArr.pop(item)
            }
        })
    })
    branded.forEach(item => {
        if(parseInt(item.Po) < 4){
            a.push(item)
        }
        if((parseInt(item.Po) > 3) && (parseInt(item.Po) < 11)){
            b.push(item)
        }
        if((parseInt(item.Po) > 10) && (parseInt(item.Po) < 21)){
            c.push(item)
        }
        if((parseInt(item.Po) > 20) && (parseInt(item.Po) < 51)){
            d.push(item)
        }
        if((parseInt(item.Po) > 50) && (parseInt(item.Po) < 101)){
            e.push(item)
        }
    })
    return new Promise((resolve, reject) => {
        keywordBracket.searchTerms = words
        getCount(branded)
        .then(count => {
            getSum(branded, 'Nq')
            .then(search => {
                getAvg(branded, 'Kd')
                .then(kdAvg => {
                    getSum(branded, 'Tr')
                    .then(traffic => {
                        keywordBracket.branded = [count, search, kdAvg, traffic.toFixed(2)]
                    })
                })
            })
        })
        getCount(a)
        .then(count => {
            getSum(a, 'Nq')
            .then(search => {
                getAvg(a, 'Kd')
                .then(competition => {
                    getAvg(a, 'Tr')
                    .then(traffic => {
                        keywordBracket.top3 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(b)
        .then(count => {
            getSum(b, 'Nq')
            .then(search => {
                getAvg(b, 'Kd')
                .then(competition => {
                    getAvg(b, 'Tr')
                    .then(traffic => {
                        keywordBracket.top410 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(c)
        .then(count => {
            getSum(c, 'Nq')
            .then(search => {
                getAvg(c, 'Kd')
                .then(competition => {
                    getAvg(c, 'Tr')
                    .then(traffic => {
                        keywordBracket.top1120 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(d)
        .then(count => {
            getSum(d, 'Nq')
            .then(search => {
                getAvg(d, 'Kd')
                .then(competition => {
                    getAvg(d, 'Tr')
                    .then(traffic => {
                        keywordBracket.top2150 = [count, search, competition, traffic]
                    })
                })
            })
        })
        getCount(e)
        .then(count => {
            getSum(e, 'Nq')
            .then(search => {
                getAvg(e, 'Kd')
                .then(competition => {
                    getAvg(e, 'Tr')
                    .then(traffic => {
                        keywordBracket.top51100 = [count, search, competition, traffic]
                        resolve(keywordBracket)
                    })
                })
            })
        })
    })
}

function rankingOpportunities(data, words){
    let unbranded = [], rankingOpportunities = [];
    words.forEach(word => {
        var substr = word
        data.forEach(item => {
            if((item.Ph).indexOf(substr) !== -1){
                unbranded.push(item.Pi)
            }
        })
    })
    unbranded.forEach(Pi => {
        data.forEach((item, i, obj) => {
            if(Pi === item.Pi){
                console.log(item);
                obj.splice(i, 1)
            }
        })
    })
    data.forEach((item) => {
        if(parseFloat(item.Tr) ===  0.00){
            rankingOpportunities.push(item);
        }
    })
    return new Promise((resolve, reject) => {
        resolve(rankingOpportunities)
    }) 

}

function trafficDrivers(data,  words){
    let unbranded =[], trafficDrivers = [];
    words.forEach(word => {
        var substr = word;
        data.forEach(item => {
            if((item.Ph).indexOf(substr) !== -1){
                unbranded.push(item.Pi)
            }
        })
    })
    unbranded.forEach(Pi => {
        data.forEach((item, i, obj) => {
            if(Pi === item.Pi){
                console.log(item);
                obj.splice(i, 1)
            }
        })
    })
    data.forEach((item) => {
        if(parseFloat(item.Tr) > 0.00){
            trafficDrivers.push(item);
        }
    })
    return new Promise((resolve, reject) => {
        resolve(trafficDrivers)
    }) 
}









function getCount(x){
    let total = 0
    return new Promise((resolve, reject) => {
        x.forEach(y => {
            total ++
        })
        resolve(total)
    })
}
function getSum(x, key){
    // looks for Nq
    let total = 0
    return new Promise((resolve, reject) => {
        x.forEach(y => {
            total += parseFloat(y[key])
        })
        resolve(total)
    })
    
}
function getAvg(x, key){
    // looks for Kd
    let total = 0
    return new Promise((resolve, reject) => {
        x.forEach(y => {
            total += parseFloat(y[key])
        })
        if(key === 'Tr'){
            resolve((total/100).toFixed(2))
        }
        else {
            resolve((total/x.length).toFixed(2))
        }
    })
    
}

 



