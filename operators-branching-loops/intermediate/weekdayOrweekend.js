// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

let dayofweek = new Date().getDay();
let input;
let day;

switch (dayofweek) {
  case 0:
    input = "Sunday";
    day = "weekday";
    break;
  case 1:
    input = "Monday";
    day = "weekday";
    break;
  case 2:
    input = "Tuesday";
    day = "weekday";
    break;
  case 2:
    input = "wednesday";
    day = "weekday";
    break;
  case 2:
    input = "Thrusday";
    day = "weekday";
    break;
  case 2:
    input = "Friday";
    day = "weekday";
    break;
  case 2:
    input = "Saturday";
    day = "weekday";
    break;
}
console.log(`${input} is ${day}`);
