function solve(dataRows) {
    let airport=new Map();
    let townsStatistics=new Map();
    let townPlanes= new Map();

    for(let dataRow of dataRows){
        let [planeId, towns, passengersCount, action]=dataRow.split(/\s+/g);
        passengersCount=Number(passengersCount);

        if(action==='land'){
            if(airport.has(planeId)){
                continue;
            } else {
                airport.set(planeId, 'land');
            }

            if(!townsStatistics.has(town)){
                townsStatistics.set(town, [0,0]);
            }

            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }

            townsStatistics.get(town)[0]+=passengersCount;
            townPlanes.get(town).add(planeId);
        } else {
            if(airport.has(planeId)){
                airport.delete(planeId);
            } else {
                continue;
            }
            if(!townsStatistics.has(town)){
                townsStatistics.set(town, [0,0]);
            }

            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }

            townsStatistics.get(town)[1]+=passengersCount;
            townPlanes.get(town).add(planeId);
        }
    }

    let sortedAirport=Array.from(airport.entries())
        .sort((a,b)=>a[0].localeCompare(b[0])); //alphabetically keys
    console.log('Planes left:');
    for(let [planeId] of sortedAirport){
        console.log(`- ${planeId}`);
    }

    let sortedTowns=[...townsStatistics.entries()]
        .sort(sortTowns);
    for(let [towns, statistics] of sortedTowns){
        console.log(towns);
        console.log(`Arrivals: ${statistics[0]}`);
        console.log(`Departures: ${statistics[1]}`);

        let sortedPlanes=[...townPlanes.get(town).values()]
            .sort((a,b)=>a.localeCompare(b)); // Sort the list of planes for each town alphabetically
        console.log('Planes:');
        for(let sortedPl of sortedPlanes){
            console.log(`-- ${sortedPl}`);
        }
    }

//Sort the towns by the number of arrivals (descending).
// If two towns have the same number, sort them alphabetically by name (ascending).
    function sortTowns(a,b) {
       let aArrivals=a[1][0]; //--value(Array)[0]element
       let bArrivals=b[1][0];
       let firstCriteria=bArrivals-aArrivals;

       if(firstCriteria!==0){
           return firstCriteria;
       } else {
           return a[0].localeCompare(b[0]);
       }
    }
}