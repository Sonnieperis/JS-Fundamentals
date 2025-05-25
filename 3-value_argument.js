// Declare a constant to hold the first argument passed to the script
const firstArg = process.argv[2];

// Check if firstArg is undefined (means no argument passed)
if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}
