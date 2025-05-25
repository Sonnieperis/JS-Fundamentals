const num = parseInt(process.argv[2]);

function factorial(n) {
  if (isNaN(n) || n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));
