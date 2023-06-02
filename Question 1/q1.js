const { readFileSync, writeFileSync } = require("fs"); // First imports the necessary functions from FS module

const fs = require("fs"); // Imports the FS module

// content/first and content/second are the specified file paths, readFileSync makes sure the files are read synchronously
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8"); // utf8 encoding is used to interpret the file contents as text

console.log(first, second); // Displays contents of the two files

// The code then writes the contents of 'first' and 'second' to a new file called result-sync.txt
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
// This flag indicates that the content should be appended to the file rather than overwriting it.
// So, the same result string is appended to the file.
