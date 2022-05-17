// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('hello world') ––> Output: Hello World


function toSentenceCase(meroSentence) {
  let lower=  meroSentence.toLowerCase();
    const words = lower.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  let sentence = words.join(" ");

  console.log(sentence);
}
toSentenceCase("PraNISh is a handsome man");

// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");
// console.log(words)
// words.map((word) => {
//     return word[0].toUpperCase() + word.substring(1);
// }).join(" ");
