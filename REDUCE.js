var num =[];
a = [2, 4];
b = [16, 32, 96];
for (let i = 1; i <= 100; i++) {
    num.push(i);
}

function factorize(arrOne,number,index){
  var factor = arrOne.reduce((amount,digit)=>{
    if(digit%number[index]===0 && digit%number[index]===0){
      amount.push(digit);
    }
    return amount
  },[])
  return factor;
}
var factorA = factorize(num,a,0);
var factorB = factorize(factorA,a,1)

console.log(factorA);
console.log(factorB);
