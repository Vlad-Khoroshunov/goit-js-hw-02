`use strict`
function formatMessage(message, maxLength) { 
    if (message.length <= maxLength) {
        return message;
    } else { 
        return message.slice(0, maxLength) + "...";
    }
}
console.log(formatMessage("Bring Me The Horizon", 110));
console.log(formatMessage("Maybe I'll just be fucked up forever", 90));
console.log(formatMessage("Should've figured myself out by now", 70));
console.log(formatMessage("And I don't wanna tear myself open, no", 50));
console.log(formatMessage("But it's hard to care when you bleed out", 30));
console.log(formatMessage("sTraNgeRs", 10));

// console.log(formatMessage());
// console.log(formatMessage());
// console.log(formatMessage());
// console.log(formatMessage());
// console.log(formatMessage());
// console.log(formatMessage());

