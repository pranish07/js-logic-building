// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

function array_element_replace(arr, old_value, new_value) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === old_value) {
        arr[i] = new_value;
      }
    }
    return arr;
  }
  console.log(array_element_replace([1, 5,3,5,6,8], 5, 10));