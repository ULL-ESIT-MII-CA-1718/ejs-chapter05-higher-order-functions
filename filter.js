const SCRIPTS = require("./scripts.js")
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(JSON.stringify(
    filter(SCRIPTS, script => script.living),
    ["name", "year"],
    2
  )
);
// → [{name: "Adlam", …}, …]
console.log("filter as a method of Arrays");

console.log(JSON.stringify(
    SCRIPTS.filter(script => script.living),
    ["name", "year"],
    2
  )
) ;
// → [{name: "Adlam", …}, …]
