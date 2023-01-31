const listDigits = function (num) {
  return [...("" + num)].map(Number);
};

const squareList = function (arr) {
  return arr.map((n) => n * n);
};

const sumList = function (arr) {
  return arr.reduce((a, v) => a + v);
};

let orderOfOps = [listDigits, squareList, sumList];

const sqDigitsAndSum = (n) => {
  for (let i = 0; i < orderOfOps.length; i++) {
    let op = orderOfOps[i];
    let res = op(n);
    console.log(`${op.name}(${n}) => ${res}`);
    n = res;
  }
  return n;
};

let n = 45;
for (let i = 0; i < 10; i++) {
  n = sqDigitsAndSum(n);
}
