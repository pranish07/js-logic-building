// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("pranish", 2) ––> Output: rucpkuj
//Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

function encodeString(str, num) {
  str = str.toLowerCase();

  var result = "";
  var charcode = 0;
  for (var i = 0; i < str.length; i++) {
    charcode = str[i].charCodeAt() + num;
    result += String.fromCharCode(charcode);
  }
  return result;
}
console.log(encodeString("pranish", 3));
