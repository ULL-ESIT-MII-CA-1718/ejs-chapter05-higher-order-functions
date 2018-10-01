// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

/*
JavaScript’s charCodeAt method gives you a code unit, not a full character code.
The codePointAt method, added later, does give a full Unicode character.
So we could use that to get characters from a string.

But the argument passed to codePointAt is still an index into the sequence of code units.
So to run over all characters in a string, we’d still need to deal with
the question of whether a character takes up one or two code units.
*/
