function radioCrystal(numArr) {
    let targetSize=numArr[0];
    let opStr='Cut';

    for(let i=1;i<numArr.length;i++){
        let microns=numArr[i];
        console.log(`Processing chunk ${microns} microns`);
        microns=executeOper(microns,'Cut', cut);
        microns=executeOper(microns,'Lap', lap);
        microns=executeOper(microns,'Grind', grind);
        microns=executeOper(microns,'Etch', etch);

        if(microns+1===targetSize){
            microns=xRay(microns);
        }
        console.log(`Finished crystal ${targetSize} microns`);
    }
    function cut(crystal) {
        return crystal/4;
    }
    function lap(crystal) {
        crystal-=crystal*0.2;
        return crystal;
    }
    function grind(crystal) {
        return crystal-=20;
    }
    function etch(crystal) {
        return crystal-=2;
    }
    function xRay(crystal) {
        console.log(`X-ray x1`);
        return ++crystal;
    }
    function transportAndWash(crystal) {
        console.log(`Transporting and washing`)
        return Math.floor(crystal);
    }
    function executeOper(microns, opStr, op) {
        let newSize=op(microns);
        let counter=0;
        while(newSize>=targetSize || Math.floor(targetSize-newSize===1)){
            microns=newSize;
            newSize=op(microns);
            counter++;
        }
        if(counter>0){
            console.log(`${opStr} x${counter}`);
            microns=transportAndWash(microns);
        }
        return microns;
    }
}

function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;

        seq[current]=sum;
    }
    console.log(seq.join(' '));
}