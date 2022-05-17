/*Print the following star pattern :-

*
* *
* * *
* * * *
* * * * *

*/

const Pattern = () => {
  let string = "";
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
};
Pattern();
