function pageCount(n, p) {
  var counter = 0;
  var counterTwo = 0;
  // first check if a pair of pages stores a page("p")
  // starting from 0 and 1 as first pages
  for (let i = 0; i <= n; i += 2) {
    let pages = [i, i + 1];
    console.log(pages);
    if (!pages.includes(p)) {
      counter++;
    } else {
      break;
    }
  }
  // to make reverse count we need to know if the last page("n") has a pair page
  // it is achieved checking if "n" is even or not, if it does, we use its increase by one as its second pages (odd one)
  // exp: [pair, pair + 1==odd page]
  n = !(n % 2) ? (n += 1) : n;
  // console.log(pagesTwo);

  // then checks from last pair of pages to first pair([0,1])
  for (let j = n; j > 0; j -= 2) {
    let pagesTwo = [j - 1, j];
    console.log("reverse:", pagesTwo);
    if (!pagesTwo.includes(p)) {
      counterTwo++;
    } else {
      break;
    }
  }
  // return the less amount of flips needed to see that page
  let result = counter < counterTwo ? counter : counterTwo;
  // console.log(result);
  // console.log("to right", counter);
  // console.log("to left", counterTwo);
  return result;
}
pageCount();
