// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]


function mergeArray(a,b){
    const merge = a.concat(b);
    console.log(merge);
}
mergeArray([1,3,5],[2,4,6])
