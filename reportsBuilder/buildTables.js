const fs = require('fs')
const json2csv = require('json2csv').Parser

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
        let trim = word.trim().toLowerCase() 
        console.log('Trimmmmmmmeddd');
        console.log(trim);
        
        tempArr.forEach(item => {
            if((new RegExp(trim)).test(item.Ph)){
                branded.push(item)
                tempArr.pop(item)
            }
        })
    })
    console.log(branded);
    
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


function convertSummarryToCsv(data){
    let r1 = data.totals, r2 = data.avg, r3 = data.top3, r4 = data.top410, r5 = data.top1120, r6 = data.top2150, r7 = data.top51100, r8 = data.unbranded, r9 = data.branded

    dataArr = [
        {
            "name": "Totals",
            "c1": r1[0] ,      
            "c2": r1[1] ,      
            "c3": r1[2] ,      
            "c4": r1[3] ,      
        },
        {
            "name": "Avg",
            "c1": r2[0] ,      
            "c2": r2[1] ,      
            "c3": r2[2] ,      
            "c4": r2[3] ,      
        },
        {
            "name": "Top 3 Totals",
            "c1": r3[0] ,      
            "c2": r3[1] ,      
            "c3": r3[2] ,      
            "c4": r3[3] ,      
        },
        {
            "name": "Top 4-10 Totals",
            "c1": r4[0] ,      
            "c2": r4[1] ,      
            "c3": r4[2] ,      
            "c4": r4[3] ,      
        },
        {
            "name": "Top 11-20 Totals",
            "c1": r5[0] ,      
            "c2": r5[1] ,      
            "c3": r5[2] ,      
            "c4": r5[3] ,      
        },
        {
            "name": "Top 21-50 Totals",
            "c1": r6[0] ,      
            "c2": r6[1] ,      
            "c3": r6[2] ,      
            "c4": r6[3] ,      
        },
        {
            "name": "Top 51-100 Totals",
            "c1": r7[0] ,      
            "c2": r7[1] ,      
            "c3": r7[2] ,      
            "c4": r7[3] ,      
        },
        {
            "name": "Unbranded",
            "c1": r8[0] ,      
            "c2": r8[1] ,      
            "c3": r8[2] ,      
            "c4": r8[3] ,      
        },
        {
            "name": "Branded",
            "c1": r9[0] ,      
            "c2": r9[1] ,      
            "c3": r9[2] ,      
            "c4": r9[3] ,      
        },
        
    ]
    const fields = [
        {
            label: '   ',
            value: 'name'   
        },
        {
            label: 'Rank Count',
            value: 'c1'
        },
        {
            label: 'Search Volume Sum',
            value: 'c2'
        },
        {
            label: 'Avg Competition',
            value: 'c3'
        },
        {
            label: 'Traffic %',
            value: 'c4'
        }
    ]
    const toCSV = new json2csv({ fields, quote: '' })
    const csv = toCSV.parse(dataArr);
    return csv;
}

function convertResearchToCsv(data){
    
}


 

module.exports.downloadSumarry = convertSummarryToCsv
module.exports.branded = branded
module.exports.summary = summary
module.exports.rankingOpportunities = rankingOpportunities
module.exports.trafficDrivers = trafficDrivers

