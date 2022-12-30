const fizzBuzz = (n) => {
  let fb = n % 15;
  switch (fb) {
    case 0:
      return "FizzBuzz";
    case 3:
    case 6:
    case 9:
    case 12:
      return "Fizz";
    case 5:
    case 10:
      return "Buzz";
    default:
      return n;
  }
};

module.exports = fizzBuzz;
