`use strict`
function checkForSpam(message) {
    const correctMessage = message.toLowerCase();
    return correctMessage.includes("spam") || correctMessage.includes("sale");
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// console.log(checkForSpam("It is not spam"));
// console.log(checkForSpam("I hate my fucking guts write now"));
// console.log(checkForSpam("I`m sorry that I let you down"));
// console.log(checkForSpam("Not a word about sale"));
// console.log(checkForSpam("Can You Feel My Heart"));
// console.log(checkForSpam("True Friends"));
// console.log(checkForSpam("Happy Song"));


