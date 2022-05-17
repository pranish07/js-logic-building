// Write a Program to convert Decimal to Binary.

// Enter the number to convert: 5
// Binary of Given Number is=101

function decToBinary(n) {
  let BinaryNum = new Array(32);
  let i = 0;
  while (n > 0) {
    BinaryNum[i] = n % 2;
    n = Math.floor(n / 2);
    i++;
  }
  for (let j = i - 1; j >= 0; j--) {
    console.log(BinaryNum[j]);
  }
}
decToBinary(5);
