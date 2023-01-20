scores =[10, 5, 20, 20, 4,5, 2, 25, 1];
//  scores == 1000 positions
// individual score == 100,000,000
var minRecord = scores[0];
var maxRecord = scores[0];
var minCount= 0;
var maxCount= 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i]>maxRecord){
    maxCount += 1;
    maxRecord = scores[i]; 
  } else if(scores[i]<minRecord){
    minCount += 1;
    minRecord = scores[i];
  }else{
    maxCount = maxCount;
    minCount = minCount;

  }
  
}
console.log(`${maxCount}${minCount}`);
