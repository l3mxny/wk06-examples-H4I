// Use when you want to disable type-checking
// for a given value, BAD PRACTICE/NOT RECOMMENDED
let whatever: any;
whatever = 10;
whatever = { x: false };
whatever = "some string";

console.log(whatever);
