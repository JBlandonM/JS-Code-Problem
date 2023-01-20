// Data types in Js
// Seven Primitives Types
// String
// Number
// null
// undefined
// Boolean
// BigInt
// Symbol

// var age = -1;
// if (age >= 65){
//     console.log("You get your income from your pension");

// }else if (age >= 18 && age < 65){
//     console.log("Each month you get a salary");

// }else if(age<18 && age>0){
//     console.log("You get an allowance");
// }else{
//     console.log("The value of the age variable is not numerical");
// }
function multipleMaker(grade, n) {
  if (grade < 38) {
    multiple = grade;
  } else if (grade > 5 * n) {
    counter++;
    multipleMaker(grade, n + 1);
  } else if (5 * n - grade < 3) {
    multiple = counter * 5;
    counter = 7;
  } else {
    multiple = grade;
    counter = 7;
  }
  return multiple;
}

// -------------------------------------------------
// iterate over each item of grades,
// if the grade is >=38 try to round it, if should.
// if NOT, parseInt the grade and return it.
// iterate in each item of grades, at the last digit of the item.
// if the digit greater than and equal 3  AND less than 5,
// digit = 5
// if the digit greater than or equal 7 AND less than 10,
// digit = 0
var grades = [38, 35, 78, 100, 73, 00, 29, 43];
var stringGrades = grades.map((grade) => {
  return grade.toString();
});
console.log(stringGrades);

var roundedDigits = stringGrades.map((item) => {
  var num;
  if (item >= 38) {
    if (item[1] >= 3 && item[1] < 5) {
      num = item[0] + 5;
    } else if (item[1] >= 8 && item[1] < 10) {
      num = (parseInt(item[0]) + 1) * 10;
    } else {
      num = parseInt(item);
    }
  } else {
    num = parseInt(item);
  }
  return parseInt(num);
});
console.log(roundedDigits);
