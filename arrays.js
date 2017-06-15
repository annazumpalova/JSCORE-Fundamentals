//1.Print a array with a given Delimeter
function main(input) {
    let delimeter=input[input.length-1];
    input.pop();
    let result="";
    for(let i=0; i<input.length; i++){
        if(i==0){
            result+=input[i];
        }else {
            result+=delimeter+input[i];
        }
    } console.log(result);
}

//2.Print every n-the Element
function solve(input) {
    let n=Number(input[input.length-1]);
    input.pop();

    let result=[];
    for(let i=0; i<input.length;i+=n){
       result.push(input[i]);
    }
    for(let num of result){
        console.log(num);
    }

}

//3.Add and Remove elements
function removeAndAdd(input) {
    let result=[];
    for(let i=0; i<input.length;i++){
        if(input[i]==="add"){
            result.push(i+1);
        } else if(input[i]==="remove"){
            result.pop();
        }
    } if(result.length==0){
        console.log("Empty")
    } else {
        for(let res of result){
            console.log(res);
        }
    }
}

//4.Rotate Array--
function rotateArray(input) {
    let num=Number(input.pop());
    num%=input.length;
    for(let i=0;i<num;i++){
        let lastElem=input.pop();
        input.unshift(lastElem);
    }
    return input.join(' ');

}

//5.Extract an Non-decreasing Subsequence from an Array
function extract(input) {
    input = input.map(Number)
    let prevElement = -Infinity
    input = input.filter(num => {
        if(num >= prevElement) {
            prevElement = num
            return true
        }
    })
    input.forEach(el => console.log(el))
}

//6.Sort Array
function sortArray(input) {
    input.sort(twoCriteriaSort)
    input.forEach(el => console.log(el))
//by length in ascending order as primary criteria, and by

  //  alphabetical value in ascending order as second criteria.
    function twoCriteriaSort(cur, next) {
        if(cur.length > next.length) {
            return 1
        } else if(cur.length < next.length) {
            return -1
        } else {
            return cur > next
        }
    }
}

//7.Magic Matrix--????????
function magic(matrix) {
    let res=false;
    let sumInitial = matrix[0].reduce((a, b) => a + b, 0);

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = matrix[row].reduce((a, b) => a + b, 0);
        if (sumRow !== sumInitial) {
            return res;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = matrix.reduce((a, b) => a + b[col], 0);
        if (sumCol !== sumInitial) {
           return res;
        }
    }

    res=true;
    console.log(res);
}

//8.Spiral Matrix
    function getMatrix(rows,cols) {
        let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows-1, cols-1];
        let matrix = [];
        for (let r = 0; r < rows; r++) matrix[r] = [];
        while (count < maxCount) {
            for (let c = minCol; c <= maxCol && count < maxCount; c++)	matrix[minRow][c] = ++count;
            minRow++;
            for (let r = minRow; r <= maxRow && count < maxCount; r++)	matrix[r][maxCol] = ++count;
            maxCol--;
            for (let c = maxCol; c >= minCol && count < maxCount; c--)	matrix[maxRow][c] = ++count;
            maxRow--;
            for (let r = maxRow; r >= minRow && count < maxCount; r--)	matrix[r][minCol] = ++count;
            minCol++;
        }

        console.log(matrix.map(row => row.join(' ')).join('\n'));
}

//9.Diagonal Attack
function diagonalAttack(arr) {
    let matrix=[];
    for(let i=0;i<arr.length;i++){
        matrix.push(arr[i].split(' ').map(Number));
    }

    let firstDiagonal=0;
    let secondDiagonal=0;
    for(let row=0;row<matrix.length;row++){
        for(let col=0;col<matrix[row].length;col++){
            if(col===row){
                firstDiagonal+=matrix[row][col];
            }
            if(col===matrix[row].length-row-1){
                secondDiagonal+=matrix[row][col];
            }
        }
    }
    if(firstDiagonal===secondDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row!==col && col!==matrix.length-1-row){
                    matrix[row][col]=firstDiagonal;
                }
            }
        }
    }

    let result=matrix.map(row=>row.join(' ')).join('\n');
    console.log(result);
    
}


//9. Equal Neightbours
function equalNeighborsCount(matrix) {
    let neighbors = 0;
    for (let row = 0; row < matrix.length-1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                neighbors++;
            }
            if (matrix[row][col] === matrix[row][col + 1]) {
                neighbors++;
            }
        }
    }
    console.log(neighbors);
}

//10.Orbit
function orbit(numArr) {
    let [rows,cols,x,y]=numArr;

    let matrix=[];
    for(let i=0;i<rows;i++){
        matrix.push('0'.repeat(cols).split('').map(Number));
    }
    let num=1;
    matrix[x][y]=1;
    let counter=1;
    let currentRow=x;
    let currentCol=y;

    while(true){
        let isFilled=false;
        num++;
        let startRow=Math.max(0,currentRow-counter);
        let endRow=Math.min(matrix.length-1, currentRow+counter);
        let startCol=Math.max(0, currentCol-counter);
        let endCol=Math.min(matrix[0].length-1, currentCol+counter);

        for(let row=startRow;row<=endRow;row++){
            for(let col=startCol;col<=endCol;col++){
                if(matrix[row][col]===0){
                    matrix[row][col]=num;
                    isFilled=true;
                }
            }
        }
        counter++;
        if(!isFilled){
            break;
        }
    }
    let result=matrix.map(row=>row.join(' ')).join('\n');
    console.log(result);
}

//02.Rossetta Stone-Matrix
function solve(input) {
    // Get size of code
    let n = Number(input.shift());

    // Initialize code matrix
    let code = [];
    for (let i = 0; i < n; i++) {
        code.push(input.shift().split(' ').map(Number));
    }

    // Initialize message matrix
    let matrix = [];
    for (let row of input) {
        matrix.push(row.split(' ').map(Number));
    }

    // Initialize decoded message
    let result = '';

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col< matrix[0].length; col++) {
            let current = matrix[row][col];
            let modifier = code[row % code.length][col % code[0].length];
            result += String.fromCharCode(((current + modifier) % 27) + 64);
        }
    }

    result = result.replace(/@/g, ' ');
    console.log(result);
}

//02.Filter Matrix
function solve(arr) {
    var targetLength = parseInt(arr.pop());
    var sequence = arr.join(' ').split(' ');

    var currentCount = 1;
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] === sequence[i + 1]) {
            currentCount++;
            if (currentCount == targetLength) {
                for (var k = i + 1; k > i + 1 - targetLength; k--) {
                    sequence[k] = false;
                }
                currentCount = 1;
            }
        } else {
            currentCount = 1;
        }
    }

    var resultArr = [];
    var index = -1;
    for (i = 0; i < arr.length; i++) {
        var currentRow = arr[i].split(' ');
        var outputRow = [];
        for (var j = 0; j < currentRow.length; j++) {
            if (sequence[++index] !== false) {
                outputRow.push(sequence[index]);
            }
        }
        resultArr.push(outputRow);
    }

    while(resultArr.length > 0) {
        var row = resultArr.shift();
        if (row.length > 0) {
            console.log(row.join(' '));
        } else {
            console.log('(empty)');
        }
    }
}

//Build a Wall-Arrays

function solve(wall) {
    wall.map(Number);
    let concrete=[];
    while(true){
        let buildOn=false;
        let dailyConcrete=0;
        for(let i=0;i<wall.length;i++){
            if(wall[i]!==30){
                dailyConcrete+=195;
                wall[i]++;
                buildOn=true;
            }

        }
        if(!buildOn){
            break;
        }else {
            concrete.push(dailyConcrete);
        }
    }

    let sumConcreate=concrete.reduce((a,b)=> a+b);
    console.log(concrete.join(', '));
    console.log(`${sumConcreate*1900} pesos`);
}

//02.Bunny Kill-Simple Preparation
function solve(dataRows) {
    let matrix = [];
    for(let i = 0; i < dataRows.length - 1; i++) {
        matrix.push(dataRows[i].split(" ").map(Number));
    }

    let coordinates =
        dataRows[dataRows.length - 1].split(" ");
    let bunnyDamage = 0;
    let bunnyKills = 0;
    for(let token of coordinates) {
        let [row, col] = token.split(",").map(Number);
        if(matrix[row][col] > 0) {
            bunnyDamage += matrix[row][col];
            bunnyKills++;
            explode(row, col, matrix);
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] > 0){
                bunnyDamage += matrix[i][j];
                bunnyKills++;
            }
        }

    }

    console.log(bunnyDamage);
    console.log(bunnyKills);

    function explode(row, col, matrix) {
        let bunnyDamage = matrix[row][col];
        for(let i = row - 1; i <= row + 1; i++) {
            for(let j = col - 1; j <= col + 1; j++) {
                if(isInside(i, j, matrix)){
                    matrix[i][j] -= bunnyDamage;
                }
            }
        }
    }

    function isInside(row, col, matrix) {
        return row >= 0 && row < matrix.length
            && col >= 0 && col < matrix[row].length
    }
}
