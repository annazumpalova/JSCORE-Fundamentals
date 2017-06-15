//2.Lab-From JSON to HTML
function JSONToHTML(json) {
    let html="<table>\n";
    let arr=JSON.parse(json);
    html+=` <tr>`;
    for(let key of Object.keys(arr[0])) {
        html+=`<th>${key}</th>`;
    }
    html+=`</tr>\n`;
    for(let obj of arr) {
        html+=` <tr>`;
        for(let keys of Object.keys(arr[0])) {
            html += `<td>${htmlEscape(obj[keys])}</td>`;
        }
        html+=`</tr>\n`
    }
    html+=`</table>`;
    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

}

console.log(JSONToHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));

//population in town
function townPop(strArr) {
    let towns=new Map();
    for(let row of strArr){
        let [name,pop]=row.split(' <-> ');
        if(!towns.has(name)){
            towns.set(name,0)
        }
        towns.set(name, towns.get(name) + Number(pop));
    }

    [...towns].forEach(([town,pop])=> console.log(`${town} : ${pop}`));
}

//count words in text with Map
function countWords(inputLines) {
    let words = inputLines.join('\n').toLowerCase().split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let wordsCount = new Map();
    for (let w of words)
        wordsCount.has(w) ? wordsCount.set(w,
            wordsCount.get(w)+1) : wordsCount.set(w, 1);

        //Sort with words
    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach(w => console.log(`'${w}' -> ${wordsCount.get(w)} times`));
}

//City Market
function cityMarket(strArr) {
    let summary=new Map();
    for(let row of strArr){
        let [town, product, sales]=row.split(' -> ');
        sales.split(/\s*:\s*/).reduce((a,b) => a * b);
        if(!summary.has(town)){
            summary.set(town, new Map());
        }
        if(!summary.get(town).has(product)){
            summary.get(town).set(product, 0);
        }
        let oldSales=summary.get(town).get(product);
        summary.get(town).set(product, oldSales + sales);
    }
    for(let [town,products] of summary){
        console.log(`Town - ${town}`);
        for(let [product, sales] of products){
            console.log(`$$$${product} : ${sales}`);
        }
    }
}

//Set uniqueWords
function uniqueWords(strArr) {
    let unique=new Set();
    strArr.join('\n').split(/\W+/)
        .filter(e => e!=='')
        .map(e=> e.toLowerCase())
        .forEach(e=>unique.add(e));
    console.log([...unique].join(', '));
}