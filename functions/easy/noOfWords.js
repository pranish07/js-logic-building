// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

    function noOfWords(str){
        return str.split(" ").length;
    }
    console.log(noOfWords("I am Iron man!!"));