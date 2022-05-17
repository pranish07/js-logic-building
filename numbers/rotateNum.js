// Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// Example-

// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412

function numberOfDigit(N) {
  let digit = 0;
  while (N > 0) {
    digit++;
    N = Math.floor(N / 10);
  }
  return digit;
}

function rotateNumberByK(N, K) {
  let X = numberOfDigit(N);
  K = ((K % X) + X) % X;
  let left_no = Math.floor(N / Math.floor(Math.pow(10, X - K)));
  N = N % Math.floor(Math.pow(10, X - K));
  let left_digit = numberOfDigit(left_no);
  N = N * Math.floor(Math.pow(10, left_digit)) + left_no;
  return N;
}

console.log(rotateNumberByK(2345, 2));
