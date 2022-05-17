// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

function reverseCharactersOfWord(str) {
  let lowerStr = str.toLowerCase();
  let reverseWordarr = lowerStr
    .split(" ")
    .map((word) => word.split("").reverse().join(""));

  return reverseWordarr.join(" ");
}

console.log(reverseCharactersOfWord("I am a handsome human being"));
