// Given three angles of a triangle, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

let a, b, c;

function typeOfTriangle(a, b, c) {
  if (a + b + c === 180) {
    if (a == b && b == c) {
      console.log("equilateral triangle");
    } else if (a == b || b == c || c == a) {
      console.log("isosceles triangle");
    } else {
      console.log("scalene triangle");
    }
  } else {
    console.log("It is not a triangle");
  }
}
typeOfTriangle(40, 50, 90);
