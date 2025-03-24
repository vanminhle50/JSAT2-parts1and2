// ---------------------------------------------------------------------
// Part 2: Data Structure - Object
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen Institute, VIC, Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

// Step 1: Create an object with the given movie details
/**
 * @const {Object} myMovie - The movie object containing title and year of release.
 * @property {string} myMovie.title - The title of the movie, e.g., "The Longest Day".
 * @property {number} myMovie.year - The year of the film's production. 
 */
// Define an object "myMovie" with initial properties "title" and "year"
const myMovie = { title: "The longest day", year: 1964 };

// ---------------------------------------------------------------------
// Function: showObject
// Description: Returns an HTML string displaying all properties of an object.
// Parameters:
//    myObject - The object whose properties will be displayed.
// Returns:
//    A string containing HTML code that lists each property and its value.
// ---------------------------------------------------------------------
function showObject(myObject) {
  // Variable to accumulate the result HTML string
  let resultString = "";
  // Iterate over all properties in the object using a for-in loop
  for (let index in myObject) {
    // Append each property name and its value to the result string, using HTML formatting
    resultString += `<span class="bold"><span class="note">${index}</span>: ${myObject[index]} <br></span>`;
  }
  // Return the complete HTML string
  return resultString;
}

// Display the original object by updating the HTML element with id "inputObject"
// "inputObject" is assumed to be an existing HTML element where the movie details will be shown
document.getElementById("input-object").innerHTML = showObject(myMovie);
//Print the object printed in the console
console.log(myMovie);

