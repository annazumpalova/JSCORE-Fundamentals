function solve(name) {
    console.log('Hello, ' + name + ', I am JavaScript!');
}

function areaAndperimetar(a, b) {
    a=Number(a);
    b=Number(b);
    let perimetar=2*(a+b);
    let area=a*b;
    console.log(area);
    console.log(perimetar);
}

function distanceOverTime([v1, v2, t]) {
    v1=Number(v1);
    v2=Number(v2);
    t=Number(t);

    let timeInHours=t/3600;
    let firstS=v1*timeInHours;
    let secondS=v2*timeInHours;
    let distance=Math.abs(firstS-secondS);
    let distanceInMeter=distance*1000;
    console.log(distanceInMeter);
}

function distanceIn3D([x1, y1, z1, x2, y2, z2]) {
    x1=Number(x1);
    y1=Number(y1);
    z1=Number(z1);
    x2=Number(x2);
    y2=Number(y2);
    z2=Number(z2);

    let distance1=Math.abs(x1-x2);
    let distance2=Math.abs(y1-y2);
    let distance3=Math.abs(z1-z2);
    let result=Math.sqrt(distance1+distance2+distance3);
    console.log(result);
}



function compoundInterest([p, i, n, t]) {
    p=Number(p);
    i=Number(i);
    n=Number(n);
    t=Number(t);
    n=12/n;
    let total=(1+i/n)**(n*t);
    let F=p*total;
    console.log(F);
}

function rounding([number, precision]) {
    number=Number(number);
    precision=Number(precision);

    var denominator=Math.pow(10, precision);
    var result=Math.round(number*denominator)/denominator;
    console.log(result);
}

function imperialUnits(number) {
    number=Number(number);

    if(number<12){
        console.log(`0'-${number}"`);
    } else {
        let n=Math.floor(number/12);
        let difference=number%12;
        console.log(`${n}'-${difference}"`)
    }
}

function nowPlaying([artistName, trackName, duration]) {
    console.log(`Now Playing: ${trackName} - ${artistName} [${duration}]`)
}

function composeTag([fileLocation, alternateText]) {
    console.log(`<img src="${fileLocation}" alt="${alternateText}">`);
}

function binaryToDecimal(number) {
    number=Number(number);
    var digit=parseInt(number,2);
    console.log(digit);
}

function assignProperties([name, firstName, age, realAge, gender, realGender]) {
    console.log(`{ ${name}: '${firstName}', ${age}: '${realAge}', ${gender}: '${realGender}' }`)
}

function lastMonth([date, month, year]) {
    date=Number(date);
    month=Number(month);
    year=Number(year);
    let theMonth=month-1;
    let newDate=new Date(year, theMonth, 0).getDate();
    console.log(newDate);
}