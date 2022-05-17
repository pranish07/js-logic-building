// Write a Program to Print N Odd Number in Descending Order.

// Input : 4
// Output : 7
// 5
// 3
// 1

function odd(n) {
  for (let i = n - 1; i >= 0; i--) {
    let a = 1 + i * 2;
    console.log(a);
  }
}
odd(7);
