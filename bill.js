// bill = array with the items cost
// k = position of element anna doesn't eat
// b = amount of money that anna contributed to the bill
// [1,2,3,4,5,3]
// k=2 = [3]
function bonAppetit(bill, k, b) {
  // Write your code here
  let itemNotShared = bill.splice(k,1);
  console.log(itemNotShared);
  let priceShared = bill.reduce((accumulator, item) => {
      accumulator += item;
    return accumulator;
  }, 0);
  console.log(priceShared);
  if (priceShared/2===b) {
    console.log("Bon Appetit"); 
  } else {
    console.log(b-(priceShared/2));
  }
};
bonAppetit([1,2,3,4,5,3], 2,18);
