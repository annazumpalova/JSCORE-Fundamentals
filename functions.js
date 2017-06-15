function solve(input) {

    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        if (inVolume(x, y, z)) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }
    function inVolume(x, y, z) {
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true;
                }
            }
        }
        return false;
    }
}
//cooking by numbers
function solve(input) {
    let num = Number(input[0]);

    for (let i = 1; i < input.length; i++) {

        if (input[i] === 'chop') {
            num = num / 2;
            console.log(num);
        }
        else if (input[i] === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        }
        else if (input[i] === 'spice') {
            num += 1;
            console.log(num);
        }
        else if (input[i] === 'bake') {
            num *= 3;
            console.log(num);
        }
        else if(input[i]=='fillet') {
            num = num - 0.20*num;
            console.log(num);
        }
    }
}

//validity checker
function validityChecker([x1,y1,x2,y2]) {
    let firstDistance=Math.sqrt(x1*x1 + y1*y1);
    let secondDistance=Math.sqrt(x2*x2 + y2*y2);
    let thirdDistance=Math.sqrt(firstDistance*firstDistance + secondDistance*secondDistance);

    if(Number.isInteger(firstDistance)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(secondDistance)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(thirdDistance)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

function treasureLocator(input){
    for (let i = 0; i < input.length; i+=2) {
        let x = Number(input[i]);
        let y = Number(input[i+1]);
        treasureFinder(x,y);
    }
    function treasureFinder(pointX,pointY){
        if(pointX >=8 && pointX <= 9 && pointY >= 0 && pointY <= 1){
            console.log('Tokelau');
        }
        else if (pointX >= 1 && pointX <= 3 && pointY >= 1 && pointY <= 3){
            console.log('Tuvalu');
        }
        else if (pointX >= 5 && pointX <= 7 && pointY >= 3 && pointY <= 6){
            console.log('Samoa');
        }
        else if (pointX >= 0 && pointX <= 2 && pointY >= 6 && pointY <= 8){
            console.log('Tonga');
        }
        else if (pointX >= 4 && pointX <= 9 && pointY >= 7 && pointY <= 8){
            console.log('Cook');
        }
        else {
            console.log('On the bottom of the ocean');
        }
    }
}

//trip length
function tripLenght([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);
    dist12 = calculateDist(x1,y1,x2,y2);
    dist13 = calculateDist(x1,y1,x3,y3);
    dist23 = calculateDist(x2,y2,x3,y3);
    if(Math.max(dist12,dist13,dist23)==dist13) console.log(`1->2->3: ${dist12+dist23}`);
    else if(Math.max(dist12,dist13,dist23) == dist12) console.log(`1->3->2: ${dist13+dist23}`);
    else if(Math.max(dist12,dist13,dist23) == dist23) console.log(`2->1->3: ${dist12+dist13}`);


    function calculateDist(x1,y1,x2, y2) {
        return  Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    }
}

function templateFormat(input) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>`);
    console.log(`<quiz>`);
    for(let i=0;i<input.length;i+=2){
        let sentance=input[i];
        let answer=input[i+1];
        console.log(`<question>`);
        console.log(sentance);
        console.log(`</question>`);
        console.log(`<answer>`);
        console.log(answer);
        console.log(`</answer>`);
    }
    console.log(`</quiz>`);
}

function modifyNumber(num) {
    let numAsStr=num.toString();
    let sum=sumDigits(numAsStr);
    while(sum/numAsStr.length<=5){
        numAsStr+=9;
        sum=sumDigits(numAsStr);
    }

    console.log(numAsStr);
    function sumDigits(numAsStr) {
        let sum=0;
        for(let digit of numAsStr){
            sum+=Number(digit);
        } return sum;
    }
}

