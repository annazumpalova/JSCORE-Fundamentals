function biggestNum([num1, num2, num3]) {
    num1=Number(num1);
    num2=Number(num2);
    num3=Number(num3);
    console.log(Math.max(num1, num2, num3));
}

function pointInRect(input) {
    let [x, y, xMin, xMax, yMin, yMax]=input.map(Number);
    if(x>=xMin && x<=xMax && y>=yMax && y<=yMax){
        console.log('inside');
    } else {
        console.log('outside');
    }
}

function oddNumber(input) {
    let n=Number(input);
    for(let i=1; i<=n; i+=2){
        console.log(i);
    }
}

function triangleOfDollars(row) {
    row=Number(row);
    let line='';
    for(let col=1; col<=row; col++){
        line+='$';
        console.log(line);
    }
}

function moviePrices([title, day]) {
    title=title.toLowerCase();
    day=day.toLowerCase();

    if(title=="the godfather"){
        switch (day){
            case "monday": return 12;
            case "tuesday": return 10;
            case "wednesday": return 15;
            case "thursday": return 12.50;
            case "friday": return 15;
            case "saturday": return 25;
            case "sunday": return 30;
            default: return "error";
        }
    }else if(title =="schindler's list"){
        switch (day){
            case "monday": return 8.50;
            case "tuesday": return 8.50;
            case "wednesday": return 8.50;
            case "thursday": return 8.50;
            case "friday": return 8.50;
            case "saturday": return 15;
            case "sunday": return 15;
            default: return "error";
        }
    } else if(title =="casablanca"){
        switch (day){
            case "monday": return 8;
            case "tuesday": return 8;
            case "wednesday": return 8;
            case "thursday": return 8;
            case "friday": return 8;
            case "saturday": return 10;
            case "sunday": return 10;
            default: return "error";
        }
    } else if(title== "the wizard of oz"){
        switch (day){
            case "monday": return 10;
            case "tuesday": return 10;
            case "wednesday": return 10;
            case "thursday": return 10;
            case "friday": return 10;
            case "saturday": return 15;
            case "sunday": return 15;
            default: return "error";
        }
    }
}


function quadraticEquation(num1, num2, num3) {
    num1=Number(num1);
    num2=Number(num2);
    num3=Number(num3);

    let D=Math.pow(num2,2) - 4*num1*num3;

    if(D>0){
        let x1=(-num2 + Math.sqrt(D)/(2*num1));
        let x2=(-num2 - Math.sqrt(D)/(2*num1));
        console.log(Math.min(x1,x2));
        console.log(Math.max(x1,x2));
    } else if(D==0){
        let x=-num2/(2*num1);
        console.log(x);
    } else if(D<0){
        console.log("No");
    }
}

function printTable(num) {
    num = Number(num);
    let html = `<table border="1">\n`;
    for (let i = 0; i <= num; i++) {
        let countNum = i;
        html += `    <tr>`;
        for (let j = 0; j <= num; j++) {
            if (i == 0) {
                if (j == 0) html += `<th>x</th>`;
                else html += `<th>${j}</th>`;
            }
            else {
                if(j == 0)html += `<th>${i}</th>`;
                else {
                    html += `<td>${countNum}</td>`;
                    countNum += i;
                }
            }
        }
        html += `</tr>\n`;
    }
    html += `</table>`;
    return html
}

function solve(n) {
    n = Number(n);
    let dash = '-';
    let sp = ' ';
    let inner = n - 2;
    if (n % 2 == 0 ) {
        n -= 1;
    }
    if (n <= 2){
        n = 3;
    }

    for (let i = 0; i < n; i++) {

        if (i == 0 || i == n - 1 || (n-1) / 2 == i) {
            console.log(`+${dash.repeat(inner)}+${dash.repeat(inner)}+`);
        }
        else {
            console.log(`|${sp.repeat(inner)}|${sp.repeat(inner)}|`);
        }
    }

}