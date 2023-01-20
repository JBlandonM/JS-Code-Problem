//from array "S" this algorithm counts, how many segments comply the next conditions
//for each segment with length= "m" the sum of its element should be equal to "d"
//count each segment...
var d = 3; //birthday
var m = 2; // birth Month
var s = [1, 2, 1, 3, 2];
var difWays = 0;
for (let i = 0; i < s.length; i++) {
  var subArray = s.slice(i, i + m); //dividing the array into segments with "m" length starting from "i"
  if (subArray.length === m) {
    var amount = 0;
    var equalToM = subArray.reduce((boolean, item) => {
      amount += item;
      boolean = amount === d; //checking if all the number within the new array sum equal to "d"
      return boolean;
    }, Boolean);
  } else {
    //if the chunk do not has a length equal to "m", is also false.
    equalToM = false;
  }
  if (equalToM) {
    //if the sum of the chunk is equal to "d" increase the counter by 1
    difWays += 1;
  }
}
console.log(difWays);
// ok
