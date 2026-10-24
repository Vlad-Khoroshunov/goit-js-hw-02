`use strict`;

function getShippingCost(country) {
  switch (country) {
    case "China":
      return "10$";

    case "Chile":
      return "300$";

    case "Australia":
      return "1000$";

    case "Jamaica":
      return "500$";

    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("China"));
console.log(getShippingCost("Uganda"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Australia"));
console.log(getShippingCost("America"));
console.log(getShippingCost("Jamaica"));

// console.log(getShippingCost());
// console.log(getShippingCost());
// console.log(getShippingCost());
// console.log(getShippingCost());
// console.log(getShippingCost());
// console.log(getShippingCost());
