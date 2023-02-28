// Parameters: array nums
// Return: an array of sums
// Examples already given.
// Pseudo-code:
// Method 1:
// -Add from left to right (loop)
// -At the end of each loop, insert number into runningSum
// -Return runningSum

const nums = [3, 1, 2, 10, 1];
let runningSum = Array(nums.length).fill(0);

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  runningSum[i] = sum;
}

console.log(runningSum);
return runningSum;
