//3.Cappy Juice
function cappyJuice(input) {
    let quantities = {};
    let bottles = {};

    for(let line of input) {
        let tokens = line.split(" => ");
        let fruit = tokens[0];
        let quantity = Number(tokens[1]);

        if(! quantities.hasOwnProperty(fruit)) {
            quantities[fruit] = 0;
        }

        quantities[fruit] += quantity;
        if(quantities[fruit] >= 1000) {
            bottles[fruit] = parseInt(quantities[fruit]/1000);
        }
    }

    for(let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

//4.Store Catalogue
function storeCatalogue(input) {
    let map = new Map();

    for(let line of input){
        let tokens = line.split(" : ");
        let product = tokens[0];
        let price = tokens[1];
        map.set(product, price);
    }

    let initials = new Set();
    Array.from(map.keys()).forEach(k => initials.add(k[0]));


    for(let char of Array.from(initials.keys()).sort()) {
        console.log(char);

        for(let product of Array.from(map.keys()).sort()){
            if(product.startsWith(char)) {
                console.log(`  ${product}: ${map.get(product)}`);
            }
        }
    }
}

//5.AutoEngineering
function autoEngineeringCompany(input) {
    let cars = new Map();

    for(let line of input){
        let tokens = line.split(" | ");
        let brand = tokens[0];
        let model = tokens[1];
        let count = Number(tokens[2]);

        if(! cars.get(brand)){
            cars.set(brand, new Map());
        }
        if(! cars.get(brand).get(model)){
            cars.get(brand).set(model, 0);
        }

        cars.get(brand).set(model, cars.get(brand).get(model) + count);
    }

    for(let [brand, modelCount] of cars){
        console.log(brand);

        for(let [model, count] of modelCount){
            console.log(`###${model} -> ${count}`);
        }
    }
}
//6.System Components
function systemComponents(input) {
let systems = new Map();

for(let line of input) {
    let tokens = line.split(/\s*\|\s*/);
    let system = tokens[0];
    let component = tokens[1];
    let subcomponent = tokens[2];

    if(! systems.get(system)){
        systems.set(system, new Map());
    }
    if(! systems.get(system).get(component)){
        systems.get(system).set(component, [])
    }
    systems.get(system).get(component).push(subcomponent);
}

let systemsSorted = Array.from(systems.keys()).sort((s1, s2) => sortSystems(s1, s2));

for(let system of systemsSorted) {
    console.log(system);
    let componentsSorted = Array.from(systems.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

    for(let component of componentsSorted) {
        console.log(`|||${component}`);
        systems.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
    }
}
    //function for-must be ordered by amount of components, in descending order, as first criteria, and by

   // alphabetical order as second criteria.
function sortSystems(s1, s2) {
    if(systems.get(s1).size !== systems.get(s2).size) {
        return systems.get(s2).size - systems.get(s1).size;
    } else {
        return s1.toLowerCase().localeCompare(s2.toLowerCase());
    }
}
//function for-ordered by amount of Subcomponents, in
  //  descending order.
function sortComponents(system, c1, c2) {
    return systems.get(system).get(c2).length - systems.get(system).get(c1).length;
}
}

//7.Usernames
function usernames(input) {
    let usernames = new Set();

    for(let username of input){
        usernames.add(username);
    }

    Array.from(usernames.keys()).sort((a, b) => sortUsernames(a, b)).forEach(u => console.log(u));
//function for-You need to order them by their length, in ascending order, as first criteria, and by alphabetical order as

 //   second criteria.
    function sortUsernames(a, b) {
        if(a.length !== b.length) {
            return(a.length - b.length);
        } else {
            return a.localeCompare(b);
        }
    }
}

//Sort The keys in OBJ by length
Object.keys().sort((a,b) => b.length-a.length);

//Function sort by firstElem(town) length--CityMarket
//a->Array[2] with a[0]->key a[1]-> Map
//when i want values in Map i must do a[1].entries().sort()
let sortedTowns=[...townsWithProduct.entries()].sort(mySort);
function mySort(a,b) {
let aLength=a[0].length;
let bLength=b[0].length;
return bLength-aLength;
}
//console.log
//for(let [towns,products] of sortedTowns){
//for(let [names,price] of products)

//8.Unique Sequence
function uniqueSequences(data) {
    let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    let arrays = new Map;
    for (let line of data) {
        let array = JSON.parse(line).map(Number).sort((a, b) => b - a);
        let toStore = `[${array.join(', ')}]`;
        if (!arrays.has(toStore))
            arrays.set(toStore, array.length);
    }

    console.log([...arrays.keys()].sort((a, b) => customSort(a, b, arrays)).join('\n'));
}
