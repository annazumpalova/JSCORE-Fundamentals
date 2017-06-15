//1.Split a string with delimeter
function main(string,delimeter) {
let splittedElement=string.split(delimeter);
for(let i=0; i<splittedElement.length;i++){
    console.log(splittedElement[i]);
}}
//2.Repeat N times
function solve(string,number) {
    number=Number(number);
    let newStr='';
    for(let i=0;i<number;i++){
        newStr+=string;
    } console.log(newStr);
}

//3.Check if string starts with a given String 
function startsWithGivenString(sentance, word) {
    let newSent=sentance.substring(0,word.length+1);
    if(word===newSent){
        console.log('true');
    } else {
        console.log('false');
    }
}

//4.Check if string ends with a given String
function endsWithGivenStr(sentance, word) {
    let newSent=sentance.substring(sentance.length-word.length,sentance.length+1);
    if(word===newSent){
        console.log('true');
    }else {
        console.log('false');
    }
}

//5.Capitalize the Words
function toTitleCase([str]) {
    let convertToLower = str.replace(/\w+/g, lower)
    let result = convertToLower.replace(/\b\w/g, upper);
    console.log(result);
    function lower(str) {
        return str.toLowerCase();
    }
    function upper(str) {
        return str.toUpperCase();
    }
}

//6.Capture the Numbers
function captureTheNumbers(str) {
  let text=str.join(' ');
  let regex=/\d+/g;
  let numbers=text.match(regex);
  console.log(numbers.join(' '));
}

//7.Find Variable Names in Sentences--
function variableNamesInSentences(input) {
    let firstRes=input.match(/\s_[a-zA-Z]+\s/g);
    firstRes.split(' ', '_');
    console.log(firstRes.join(', '));
}

//8.Find Occurrences
function wordOccurrences(string, word) {
    let regexExpression = "\\b(" + word + ")\\b";
    let regex = new RegExp(regexExpression, "ig");
    let result = [], match;
    while (match = regex.exec(string)) {
        result.push(match);
    }
    console.log(result.length);
}

//9.Extract the links
function extractTheLinks(input) {
    let links = [];
    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;

    for(let sentence of input) {
        let match = null;
        let index = 0;
        while(match = regex.exec(sentence)) {
            console.log(match[0]);
        }
    }
}

//10.SecretData
function secretData(input) {
    let nameRegex = /\*[A-Z]{1}[a-zA-Z]*(?= |\t|$)/g;
    let phoneRegex = /\+[0-9\-]{10}(?=\t| |$)/g;
    let idRegex = /![a-zA-Z0-9]+(?=\t| |$)/g;
    let baseRegex = /_[a-zA-Z0-9]+(?=\t| |$)/g;

    for(let sentence of input) {
        sentence = sentence.replace(nameRegex, m => "|".repeat(m.length));
        sentence = sentence.replace(phoneRegex, m => "|".repeat(m.length));
        sentence = sentence.replace(idRegex, m => "|".repeat(m.length));
        sentence = sentence.replace(baseRegex, m => "|".repeat(m.length));

        console.log(sentence);
    }
}

//16oct-Exam SpyMaster
function spyMaster(input){
    "use strict";
    let specialKey = input.shift();
    let messagePattern = "((?: |^)";
    for(let i = 0; i < specialKey.length; i++){
        messagePattern += "[" + specialKey[i].toLowerCase() + specialKey.toUpperCase() + "]";
    }

    messagePattern += "[ ]+)([!#$%A-Z]{8,})( |\\.|,|$)";
    let messageRegex = new RegExp(messagePattern,'g');

    for(let i = 0; i < input.length; i++){
        let line = input[i].replace(messageRegex,replacer);
        console.log(line);
    }

    function replacer(match,group1,group2,group3){
        group2 = group2.replace(/!/g,'1')
            .replace(/%/g, '2')
            .replace(/\#/g,'3')
            .replace(/\$/g,'4')
            .replace(/[A-Z]/g,x=>x.toLowerCase());
        return group1 + group2 + group3;
    }
}

//16dec-Exam-FormatHelper
function solve([text]) {
    console.log(text
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\. (?=[0-9])/g, (match) => `.`)
        .replace(/" *(.+?) *"/g, (match, g1) => `"${g1}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match, g1) => g1));
}

function solve(inputArr) {
    let text=inputArr[0];
    text.replace(/[.,!?:;]\s*/g, (match)=>match.trim() + ' ');
    text.replace(/\s+[.,!?:;]/g, (match)=>match.trim());
    text.replace(/\.\s*\.\s*\.\s*!/g, "...!");
    text.replace(/(\.\s+)(\d+)/g, (match, gr1, gr2)=> gr1.trim()+gr2);
    text=text.replace(/"(\s*[^\"]+\s*)"/g, (match,gr1)=>`"${gr1.trim()}"`);
    console.log(text);
}


//03.SoftuniForum-Replace
function solve(arr) {
    var banList = arr.pop().split(' ');
    var text = arr.join('\n');

    var codePattern = /<code>[\s\S]+?<\/code>/g;
    var codeBlocks = [];
    var matchingCode;
    while (matchingCode = codePattern.exec(text)) {
        var codeBlock = matchingCode[0];
        var codeReplacer = new Array(codeBlock.length).join('#');
        text = text.replace(codeBlock, codeReplacer);
        codeBlocks.push({
            original: codeBlock,
            replacedWith: codeReplacer
        });
    }

    banList.forEach(function (entry) {
        var censoredUserPattern = new RegExp('(#\\b' + entry + ')\\b', 'g');
        var match;
        while (match = censoredUserPattern.exec(text)) {
            var censoredName = match[1];
            var replacer = new Array(censoredName.length).join('*');
            text = text.replace(censoredName, replacer);
        }
    });

    var validUserPattern = /#(\b[a-zA-Z][\w\-]+[a-zA-Z0-9]\b)/g;
    var linkOpeningTag = '<a href="/users/profile/show/';
    var linkClosingTag = '</a>';
    text = text.replace(validUserPattern, linkOpeningTag + '$1">$1' + linkClosingTag);

    codeBlocks.forEach(function (codeBlock) {
        text = text.replace(codeBlock.replacedWith, codeBlock.original);
    });

    console.log(text);
}