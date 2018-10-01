/*
A for/of loop can also be used on strings.
Like codePointAt, this type of loop was introduced at a time
where people were acutely aware of the problems with UTF-16.
When you use it to loop over a string, it gives you real characters, not code units.
*/
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
// → 🌹
// → 🐉
