// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

function indexOf(arr,index){
    let indices=[]
    let idx = arr.indexOf(index);
    while(idx != -1){
        indices.push(idx);
        idx=arr.indexOf(index,idx+1)
    }
    console.log(indices);
}
indexOf([1,2,3,2,4,5],2);