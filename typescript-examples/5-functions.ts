// Usually don't need to add a return type
// annotation since TypeScript will infer it
function add(a: number, b: number) {
  return a + b;
}

// THIS WILL NOT WORK:
// add(5, "Some string");

const add2 = (a: number, b: number) => {
  return a + b;
};

console.log(add(5, 3));

// Explicit return types
function add_explict1(a: number, b: number): number {
  return a + b;
}

const add_explicit2 = (a: number, b: number): number => a + b;
