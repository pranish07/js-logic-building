// Write a Program to Convert Octal to Decimal.

// Enter an octal number: 116
// Octal of Given Number = 78 in decimal

function decToOctal(n) {
  // array to store octal number
  let octalNum = new Array(100);

  // counter for octal number array
  let i = 0;
  while (n != 0) {
    // storing remainder in octal array
    octalNum[i] = n % 8;
    n = Math.floor(n / 8);
    i++;
  }

  // printing octal number array in reverse order
  for (let j = i - 1; j >= 0; j--) console.log(octalNum[j]);
}
decToOctal(33);
