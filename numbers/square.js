// Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula :

// Area: a*a

// Perimeter: 4*a

// Surface Area: 6*a*a

// Volume: a*a*a

function area(a) {
  let areaofSquare = a * a;
  return areaofSquare;
}
function perimeter(a) {
  let perimeterOfSquare = 4 * a;
  return perimeterOfSquare;
}
function squareArea(a) {
  let squareAreaOfSquare = 6 * a * a;
  return squareAreaOfSquare;
}
function volume(a) {
  let volumeOfSquare = a * a * a;
  return volumeOfSquare;
}

function All(a) {
  console.log("area: " + area(a));
  console.log("perimeter: " + perimeter(a));
  console.log("squareArea: " + squareArea(a));
  console.log("volume: " + volume(a));
}
All(2);
