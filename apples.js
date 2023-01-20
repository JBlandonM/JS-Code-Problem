
//  *  1. INTEGER s
//  *  2. INTEGER t
//  *  3. INTEGER a
//  *  4. INTEGER b
//  *  5. INTEGER_ARRAY apples
//  *  6. INTEGER_ARRAY oranges
//  */

var s=7, t=11, a=5, b=15, apples=[-2,2,1], oranges=[5,-6];
// houseWith = (fruit>=S && fruit<=t);
function finalPosition(arr,tree){
  var num;
  var finalPos = arr.map((distance)=>{
    distance <= 0 ? ( num = tree - Math.abs(distance)) : (num = tree + Math.abs(distance));
    return num;
  })
  return finalPos;
}
var finalPosApple = finalPosition(apples,a);
var finalPosOrange = finalPosition(oranges,b);
// console.log(finalPosApple);
// console.log(finalPosOrange);
function finalAmount(arr,s,t){
  var amount = arr.filter((fruit)=>(fruit>=s && fruit<=t))
  return amount;
}
var applesOnHouse = (finalAmount(finalPosApple,s,t));
var orangesOnHouse = (finalAmount(finalPosOrange,s,t));

console.log(applesOnHouse.length);
console.log(orangesOnHouse.length);