// return the most seen type of bird (1,2,3,4,5);
// if are more than one that has the same seen amount return the least id;
arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
let objAccumulator = arr.reduce(
  (accumulator, id) => {
    accumulator[id] += 1;
    return accumulator;
  },
  { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
);
let amounts = Object.values(objAccumulator);
console.log(amounts);
let maxSeen = Math.max(...amounts);
console.log(maxSeen);
let ID = amounts.findIndex((amount) => amount === maxSeen) + 1;
console.log(ID);
