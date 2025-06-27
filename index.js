function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = new Set();
  for (let num of array) {
    const complement = target - num;
    if (seen.has(complement)) return true;
    seen.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n) - we traverse the array once and each lookup in the set is O(1)
*/

/* 
  Add your pseudocode here
  create a set to keep track of numbers we've seen
  for each number in the array
    calculate the complement
    if (complement in seen) return true;
    seen.add(num);
  }
  return false;
*/

/*
  Add written explanation of your solution here
  We use a set to keep track of the numbers we've seen so far.
  For each number in the array, we calculate its complement (the number we need to find).
  If the complement is already in the set, we return true.
  If not, we add the current number to the set and continue.
  If we finish the loop without finding a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
