// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.
function sockPairsAmt (socks){
  let socksAmt = Object.values(socks)
  let pairs =0;
  for (let i = 0; i < socksAmt.length; i++) {
      let sum = 2
      while (sum<=socksAmt[i] && socksAmt[i]>1) {
        pairs +=1
        sum+=2
      }
  }    
  console.log(pairs);
}
function sockMerchant(ar,n) {
  let socksTypeAmt = ar.reduce((accumulator, sock)=>{
    if(!accumulator[sock]){
      accumulator[sock] = 1
    }else{
      accumulator[sock] +=1;
    }
    return accumulator
  }, {});
  console.log(socksTypeAmt);
  sockPairsAmt(socksTypeAmt);

}
sockMerchant([1,2,2,3,4,5,0,0])
