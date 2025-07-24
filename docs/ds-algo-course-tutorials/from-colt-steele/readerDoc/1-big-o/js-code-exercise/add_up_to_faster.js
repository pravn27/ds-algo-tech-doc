const addUptoNNumber = (n) => {
  return (n * (n + 1)) / 2;
};

const inputSize = 1000000000;
const t1 = performance.now();
addUptoNNumber(inputSize);
const t2 = performance.now();
console.log(
  `Time taken to run addUptoNNumber function for InputSize ${inputSize}`
);
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
