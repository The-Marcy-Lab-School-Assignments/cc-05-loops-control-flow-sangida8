// Question 1
const multiplesOfSixAndNine = () => {
  for (let n = 1; n <= 100; n++) {
    if (n % 6 === 0 && n % 9 === 0) {
      console.log(n);
    }
  }
};
multiplesOfSixAndNine();

// Question 2
const greaterNum = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 === num2) {
      return "both integers are equal";
    } else if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    return null;
  }
};
console.log(greaterNum(10, 7)); //returns 10
console.log(greaterNum(114, 114)); //returns "both integers are equal"
console.log(greaterNum("21", 21)); //returns null
console.log(greaterNum("21", "21")); //returns null

// Question 3 ** Review this because it does not give me 41832 **
const sumOfFourAndSix = () => {
  let sum = 0;

  // Loop through numbers from 1 to 1000
  for (let i = 1; i <= 1000; i++) {
    // Add to sum if divisible by 4 or 6 (but not double-count multiples of both)
    if (i % 4 === 0 || i % 6 === 0) {
      sum += i;
    }
  }

  return sum;
};

console.log(sumOfFourAndSix()); // returns 166834

// Question 4
const oddAndEvenToN = (n) => {
  // Loop through numbers from 0 to n
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
};

oddAndEvenToN(5);

// Question 5
const sumOfNotDivisibleByTen = () => {
  let sum = 0;

  // Loop through numbers from 1 to 1000
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 !== 0) {
      // Check if the number is not divisible by 10
      sum += i; // Add to sum if true
    }
  }

  return sum; // This returns the total sum
};

console.log(sumOfNotDivisibleByTen()); // returns 450000

// Question 6
const greaterNumb = (num1, num2, num3, num4) => {
  // Check if all arguments are integers
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num4 !== "number"
  ) {
    return null; // Return null if any argument is not a number
  }

  // Check if all arguments are equal
  if (num1 === num2 && num2 === num3 && num3 === num4) {
    return "all integers are equal";
  }

  // Check if three arguments are equal
  if (
    (num1 === num2 && num2 === num3) ||
    (num1 === num2 && num2 === num4) ||
    (num1 === num3 && num3 === num4) ||
    (num2 === num3 && num3 === num4)
  ) {
    return "three integers are equal";
  }

  // Check if two arguments are equal
  if (
    (num1 === num2 && num1 !== num3 && num1 !== num4) ||
    (num1 === num3 && num1 !== num2 && num1 !== num4) ||
    (num1 === num4 && num1 !== num2 && num1 !== num3) ||
    (num2 === num3 && num2 !== num1 && num2 !== num4) ||
    (num2 === num4 && num2 !== num1 && num2 !== num3) ||
    (num3 === num4 && num3 !== num1 && num3 !== num2)
  ) {
    return "two integers are equal";
  }

  return Math.max(num1, num2, num3, num4);
};

console.log(greaterNumb(10, 7, 16, 80)); // returns 80
console.log(greaterNumb(1.14, 1.14, 5, 7)); // returns "two integers are equal"
console.log(greaterNumb(1.14, 1.14, 1.14, 7)); // returns "three integers are equal"
console.log(greaterNumb("21", 21, 60, 3)); // returns null

// Bonus Question
