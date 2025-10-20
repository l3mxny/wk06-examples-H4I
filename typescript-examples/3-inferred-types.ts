// TypeScript INFERS this is a string
let newName = "Alice";
// Line below would cause an error
// newName = 4;

// TypeScript INFERS that this is a number[]
let numsArray = [1, 2, 3];
// Line below would cause an error
// numsArray.push("Hi");
