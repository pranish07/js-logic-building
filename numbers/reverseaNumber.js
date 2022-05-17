// Write a JavaScript program that reverses a number.

// Example:

// Input:  32243;
// Output:  34223

function reversedNumber(num){
    return (
    parseFloat(
        num.toString().split('').reverse("").join("")
    ) * Math.sign(num)
    )}
console.log(reversedNumber(23456));
