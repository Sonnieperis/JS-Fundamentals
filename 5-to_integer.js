const arg = process.argv[2]; // get the first argument

const num = parseInt(arg, 10); // try to convert to integer (base 10)

// Check if conversion resulted in a number (not NaN)
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
