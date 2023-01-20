function dayOfProgrammer(year) {
  // Write your code here
  // year=(1700-2700)
  // Julian Calendar (1700 - 1917)
  // transition (1918)
  // Gregorian Calendar (1919 - 2700)
  new Date()
  if (year >= 1919) {
    // GREGORIAN
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 > 0)) {
      return `12.09.${year}`;
    }
    return `13.09.${year}`;
  } else if (year == 1918) {
    //TRANSITION
    return `26.09.${year}`;
  } else if (year <= 1917) {
    //JULIAN
    if (year % 4 == 0) {
      return `12.09.${year}`;
    }
    return `13.09.${year}`
  } else {
    return "Number Invalid";
  }
}
console.log(dayOfProgrammer(1917));
