let listPrice1 = [
  [19000, 5000, 42000, 2000, 77000],
  [10000, 30000, 5000, 500000],
  [8500, 400000],
];

function minMax(prices) {
  // Your code here
  var chuckMaxString = [];
  var chunkMinString = [];
  var newArray = [];

  prices.forEach((element) => {
    chuckMaxString.push(Math.max.apply(Math, element));
    chunkMinString.push(Math.min.apply(Math, element));
  });
  var maxString = Math.max.apply(Math, chuckMaxString);
  var minString = Math.min.apply(Math, chunkMinString);

  newArray.push(minString);
  newArray.push(maxString);

  return newArray;
}

console.log(minMax(listPrice1));
// [2000, 500000]
