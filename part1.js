// ---------------------------------------------------------------------
// Part 1: Data structures and algorithms – simple data types.
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen institute, VIC , Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

// Step 1: Create an array with the given numbers
// Define a array of numbers
/**
 * Sorts the input array in ascending order.
 * @param {Array} inputArray - The array is build wwith the following numbers 11, 5, 8, 3, 25, 16, 31, 45, 14, 20.
 */
let inputArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Display the original array in HTML element with id "original-array"
document.getElementById('original-array').innerHTML = `<span class="bold note"> ${inputArray} </span>`;
//Print inputArray to the screen.
console.log(`The inputArray ${inputArray}`);

// Step 2: Function to sort the array in ascending order
/**
 * Sorts the input array in ascending order.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function ascendingSort(arr) {
  return arr.sort((a, b) => a - b);
}

// Create a copy of the array and sort it
let sortedArray = ascendingSort(inputArray.slice());

//Print inputArray to the screen.
console.log(`The sorted array ${sortedArray}`);

// Display the sorted array in HTML element with id "sorted-array"
document.getElementById('sorted-array').innerHTML = `<span class="bold note"> ${sortedArray} </span>`;
