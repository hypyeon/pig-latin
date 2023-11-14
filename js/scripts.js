function vowelDetection(inputArray) {
    let sentenceArray = [];
    let wordResult = '';
    inputArray.forEach((element) => {
        switch (element.charAt(0)) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                wordResult = addWay(element); 
                break;
            default:
                wordResult = quDetection(element);
        }
        sentenceArray.push(wordResult);
    });
    return sentenceArray.join(" ");
}

function quDetection(element) {
    let result = '';
    if (element.charAt(0) === 'q' && element.charAt(1) === 'u') {
        result = element.substring(2) + element.substring(0, 2) + 'ay';
        
    } else {
        result = addAy(element);
    }
    return result;
}

function addWay(word) {
    return `${word}way`;
}

function addAy(word) {
    let firstVowelIndex = 0;
    for (let i = 0; i < word.length; i++) {
        if (['a', 'e', 'o', 'u', 'i'].includes(word[i].toLowerCase())) {
            firstVowelIndex = i;
            break;
        }
    }
    let result = word.substring(firstVowelIndex) + word.substring(0, firstVowelIndex);
    return `${result}ay`;
}

function pigLatinRun() {
    const input = document.querySelector("textarea").value;
    const inputArray = input.split(" ");
    let functionResult = vowelDetection(inputArray);
    displayText(functionResult);
}

function displayText(functionResult) {
    const result = document.getElementById("result");
    result.innerHTML = functionResult;
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    pigLatinRun();
});