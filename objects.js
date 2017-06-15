//1.Heroic Inventory
function main(input) {
    let heroData=[];
    for(let i=0;i<input.length;i++) {
        let currentHeroArguments = input[i].split(' / ');

        let currentHeroName = currentHeroArguments[0];
        let currentHeroLevel = Number(currentHeroArguments[1]);
        let currentHeroItems = [];
        if (currentHeroArguments.length > 2) {
            let currentHeroItems = currentHeroArguments[2].split(", ");

        }
        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };

        heroData.push(hero);
    }
     console.log(JSON.stringify(heroData));
}

//2.Lab-From JSON to HTML
function JSONToHTML(json) {
    let html="<table>\n";
    let arr=JSON.parse(json);
    html+=" <tr>";
    for(let key of Object.keys(arr[0])) {
        html+='<th>${htmlEscape(key)}</th>>';
    }
        html+='</tr>\n';

    for(let obj of arr) {
        for(let keys of Object.keys(arr[0])) {
            html += '<td>${htmlEscape(obj[keys])}</td>'
        }
    } html+='</tr>\n';
    return html+"</table>";
    function htmlEscape(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");}


}

//2.JSON Table
function jsonTable(input) {
    let html='<table>\n';
    let arr=JSON.parse(input);
    for(let obj of arr){
        html+=' <tr>\n';
        html+=`<td>${obj['name']}</td>\n`;
        html+=`<td>${obj['position']}</td>\n`;
        html+=`<td>${obj['salary']}</td>\n`;
        html+=' </tr>\n';

    }
    html+='</table>\n';
    console.log(html);
}