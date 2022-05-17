// Write a JavaScript program to compute the sum of all digits that occur in a given string.

// Input: 1234
// Output: 1+2+3+4 = 10

function sum(num) {
  return String(num)
    .split("")
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
}
console.log(sum(2345));
