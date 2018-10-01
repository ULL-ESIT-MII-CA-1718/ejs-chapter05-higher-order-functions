// let’s write code that finds the average year of origin
// for living and dead scripts in the data set.
const SCRIPTS = require("./scripts.js");

Array.prototype.average = function (array) {
  return this.reduce((a, b) => a + b) / this.length;
};

console.log(Math.round(
  SCRIPTS.filter(s => s.living).map(s => s.year).average()));
// → 1188
console.log(Math.round(
  SCRIPTS.filter(s => !s.living).map(s => s.year).average()));
// → 188
