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

//Print the sorted array to the screen.
console.log(`The sorted array ${sortedArray}`);

// Display the sorted array in HTML element with id "sorted-array"
document.getElementById('sorted-array').innerHTML = `<span class="bold note"> ${sortedArray} </span>`;

// Step 3: Function to insert a number into the sorted array while keeping it sorted
/**
 * Inserts a number into the sorted array in its correct position.
 * Uses binary search to find the correct index.
 * @param {Array} arr - The sorted array where the number will be inserted.
 * @param {number} num - The number to insert.
 * @returns {Array} - The updated array with the number inserted.
 */
function insertNumber(arr, num) {
  let begin = 0, end = arr.length - 1;

  // Use binary search to determine the correct insertion position
  while (begin <= end) {
    let middle = Math.floor((begin + end) / 2);
    if (arr[middle] < num) {
      begin = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  // Insert the number at the determined position
  arr.splice(begin, 0, num);
  return arr;
}

// Insert the numbers 19, 23, and 30 into the sorted array one by one
insertNumber(sortedArray, 19);
insertNumber(sortedArray, 23);
insertNumber(sortedArray, 30);

// Display the array after insertion in HTML element with id "inserted-array"
document.getElementById('inserted-array').innerHTML = `<span class="bold note"> ${sortedArray} </span>`;

//Print the array after insert to the screen.
console.log(`The sorted array ${sortedArray}`);
