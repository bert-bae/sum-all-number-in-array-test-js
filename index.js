function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += sumItems(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
}

console.log(sumItems([1, [2, 5, 6] , 3, 4, 5]));

module.exports = sumItems;