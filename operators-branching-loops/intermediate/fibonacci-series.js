//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

let firstNumber = 0;
let secondNumber = 1;
let nextTerm;

for (i = 0; i < 10; i++) {
  console.log(firstNumber);
  nextTerm = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = nextTerm;
}
