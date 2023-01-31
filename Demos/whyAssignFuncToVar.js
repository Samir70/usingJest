let multiply = function (a, b) {
  return a * b;
};

let add = function (a, b) {
  return a + b;
};

let difference = function (a, b) {
  return Math.abs(a - b);
};

let divide = function (a, b) {
  return a / b;
};

let ops = {
  product: multiply,
  sum: add,
  difference: difference,
  quotient: divide,
};

let parseCalc = (str) => {
  // str is something like "What is the product of 3 and 5"
  words = str.split(" ");
  op = words[3];
  a = Number(words[5]);
  b = Number(words[7]);
  return `The ${words.slice(3).join(" ")} is ${ops[op](a, b)}`;
};

const tests = [
  "What is the product of 3 and 5",
  "What is the sum of 3 and 5",
  "What is the difference of 3 and 5",
  "What is the quotient of 3 and 5",
  "What is the quotient of 35 and 5",
];

tests.forEach((t) => console.log(parseCalc(t)));