// var a =[2,3,6];
// var b= [42,84];
// var a=[1];
// var b=[72, 48];
// var a=[2];
// var b=[20, 30, 12];
var a=[51];
var b=[50];
// var a=[3, 9, 6];
// var b=[36, 72];

var num=[];
for (let i = 1; i <= 100; i++) {
  num.push(i);
}
var finalFactor =[];
for (let i = 0; i < num.length; i++) {
  if (a.every((item)=>num[i]%item===0)) {
    finalFactor.push(num[i]);
  }
}
console.log(finalFactor);

var secondCondition =[];
for (let i = 0; i < finalFactor.length; i++) {
  if (b.every((item)=>item%finalFactor[i]===0)) {
    secondCondition.push(finalFactor[i]);
  }
}
console.log(secondCondition.length);



