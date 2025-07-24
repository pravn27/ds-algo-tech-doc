const addUptoNNumber = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
};

const inputSize = 1000000000;
const t1 = performance.now();
addUptoNNumber(inputSize);
const t2 = performance.now();
console.log(
  `Time taken to run addUptoNNumber function for InputSize ${inputSize}`
);
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
