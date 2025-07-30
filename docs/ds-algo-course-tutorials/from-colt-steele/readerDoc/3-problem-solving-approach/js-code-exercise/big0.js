// Count up & down numbers from top & down side
const countUpAndDownNumber = (n) => {
  console.log("Going Up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Going Down");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
};
countUpAndDownNumber(5);

// Print all the pairs
const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
printAllPairs(5);
