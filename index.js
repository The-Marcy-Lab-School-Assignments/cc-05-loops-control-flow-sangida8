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

// Question 3

// Question 4

// Question 5

// Question 6

// Bonus Question
