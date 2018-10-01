const SCRIPTS = require("./scripts.js");

/*
  The countBy function expects a collection (anything that we can loop over with for/of) and a function that computes a group name for a given element. It returns an array of objects, each of which names a group and tells you the number of elements that were found in that group.
*/
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

// console.log(characterScript(121));
// → {name: "Latin", …}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }); // .filter(({name}) => name != "none");
  console.log(scripts);

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ")+` total number of chars = ${total}`;
}

const test = '英国的狗说"woof", 俄罗斯的狗说"тяв"';
console.log("test string = "+test);
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic
