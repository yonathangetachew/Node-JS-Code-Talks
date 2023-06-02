// Destructuring assignment
const { readFile, writeFile } = require("fs"); // Imports the necessary functions, readFile and writeFile, from the fs module
console.log("start");
// The code asynchronously reads the contents because it does not specify to read synchronously
readFile("./content/first.txt", "utf8", (err, result) => {
  // If an error occurs during the file reading process, it is logged to the console and the execution returns
  // out of the callback function using return.
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(result);
  readFile("./content/second.txt", "utf8", (err, result) => {
    // Similar to the previous step, the code checks for errors and logs them if they occur.
    // If the file is read successfully, the contents of second.txt are stored in the result variable.
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(result);
    writeFile(
      // The callback function for the writeFile operation handles potential errors.
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        // If an error occurs, it is logged to the console, and the execution returns out of the callback function.
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with the task");
      }
    );
  });
});

console.log("starting next task"); // Finally, the string 'starting next task' is logged to the console
