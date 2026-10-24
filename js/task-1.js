`use strict`;

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = pricePerDroid * quantity;
  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `Droids: ${quantity}, total price ${totalPrice}`;
  }
}

console.log(makeTransaction(4, 500, 10000));
console.log(makeTransaction(1, 500, 1000));
console.log(makeTransaction(10, 100, 10000));
console.log(makeTransaction(2, 500, 5000));
console.log(makeTransaction(45, 1000, 100000));
