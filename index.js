const countOdd = function(numbers, start, end) {
  if (start==end) {
    return 0;
  }
  let isOdd = numbers[start] % 2 != 0 ? 1 : 0;
  return isOdd + countOdd(start+1, end);
}

console.log(countOdd([1,2,3,4,5,], 0, 4))

module.exports = countOdd;