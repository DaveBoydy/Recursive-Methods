/**
 *  Recursive fibonacci sequence algorithm
 */
const fibonacci = (n) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

/**
 *  Logs the fibonacci input,
 *  sequence and output numbers.
 */
const printSequence = (n) => {
  console.log("INPUT:", `${n} `);
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
  console.log("OUTPUT:", `${fibonacci(n)} `);
};

printSequence(-1);
printSequence(0);
printSequence(1);
printSequence(2);
printSequence(3);
printSequence(5);
printSequence(8);
printSequence(13);
