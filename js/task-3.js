`use strict`
function checkForSpam(message) {
    return message.includes("spam") || message.includes("sale");
}

console.log(checkForSpam("It is not spam"));
console.log(checkForSpam("I hate my fucking guts write now"));
console.log(checkForSpam("I`m sorry that I let you down"));
console.log(checkForSpam("Not a word about sale"));
console.log(checkForSpam("Can You Feel My Heart"));
console.log(checkForSpam("True Friends"));
console.log(checkForSpam("Happy Song"));

