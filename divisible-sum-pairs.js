k = 5;
ar = [1, 2, 3, 4, 5, 6];
var countPairs = 0;
// condition i < j
//nested loop to iterate: over each position on the array
// while the other iterate over over the rest of number
// the goal is find each pair of number which summed are divisible by K
// the position of first num should be less than the second position
for (let i = 0; i < ar.length; i++) {
  for (let j = i + 1; j < ar.length; j++) {
    if (i < j) {
      var sum = ar[i] + ar[j];
      if (sum % k === 0) {
        // console.log(`[${ar[i]} ${ar[j]}]`);
        countPairs += 1;
      } else {
        countPairs = countPairs;
      }
    }
  }
}
console.log(countPairs);
// Ok
