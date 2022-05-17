// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

function areaofHexagon(side){
    const solve = ((3 * Math.sqrt(3))/2);
    const area = solve * (side ** 2);
    console.log(area);
}
areaofHexagon(7);