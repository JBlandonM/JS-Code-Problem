// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2
// 1- use a loop to calculate the position value after each jump;
// 2- append each position on an arrays
// 3- create an acumulator  to store the actual position of both animal, and comparate if its the same position
// 2081 8403 9107 8400
// var x1 = 2081,
//   v1 = 8403,
//   x2 = 9107,
//   v2 = 8400;
// var kangarooOnePos;
// var kangarooTwoPos;
// var is;
// // function kangarooPosy(x1, v1, x2, v2){
//   if (!(x1 < x2 && v1 < v2)) {
//     for (var i = 1; i < 20; i++) {
//       kangarooOnePos[i] = kangarooOnePos[i - 1] + v1;
//       kangarooTwoPos[i] = kangarooTwoPos[i - 1] + v2;
//       if (kangarooOnePos[i]===kangarooTwoPos[i]) {
//         is = true;
//         break;
//       }else{
//         is = false;
//       }
//     }
//   }else{
//     is = false;
//   }
//   return (is===true ? `YES` : `NO`);
// }
// console.log(kangarooOnePos);
// console.log(kangarooTwoPos);
// console.log(kangarooPosy(x1,v1,x2,v2));
var x1 = 45,
  v1 = 5,
  x2 = 49,
  v2 = 3;

function kangarooPosy(x1, v1, x2, v2){
    var kangarooOnePos;
    var kangarooTwoPos;
    var is;
    if (!(x1 < x2 && v1 < v2)) {
      var j;
      var z;
      for (var i = 1; i < 10000; i++) {
        z = x1;
        j = x2 ;        
        var kangarooOnePos = z+(v1*i);
        var kangarooTwoPos = j+(v2*i);
        if (kangarooOnePos===kangarooTwoPos) {
          is = true;
          break;
        }else{
          is = false;
        }
      }
    }else{
      is = false;
    }
    return (is===true ? `YES` : `NO`);
    // return kangarooOnePos;
  }
  console.log(kangarooPosy(x1,v1,x2,v2));
  // console.log(kangarooOnePos);
  // console.log(kangarooTwoPos);
