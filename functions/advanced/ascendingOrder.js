// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]



function sortArray(array){
array.sort((a,b)=>a-b);
console.log(array);
}
sortArray([100,83,32,9,45,61]);