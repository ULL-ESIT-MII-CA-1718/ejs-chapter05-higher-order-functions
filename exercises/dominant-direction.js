/*
Write a function that computes the dominant writing direction in a string of text.
Remember that each script object has a direction property
that can be "ltr" (left to right),
"rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority
of the characters that have a script associated with them.
*/

const SCRIPTS = require("../scripts.js");

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    /*
      findIndex is somewhat like indexOf, but instead of looking for a specific value, it finds the first value for which the given function returns true. Like indexOf, it returns -1 when no such element is found.
      */
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1, str: item });
    } else {
      counts[known].count++;
      counts[known].str += item;
    }
  }
  return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}


function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
