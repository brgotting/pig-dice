//---- count to 6
var score = [];

// function randomNumberGenerator(number){
//   for( var i = 1; i <= number; i ++){
//   array.push(i);
//
//   console.log(array);
//   }
// }

function randomNumber(number){
  var number = Math.floor((Math.random() * 6) + 1);
    score.push(count(number));
    console.log("total", score);
}

function count(number) {
  if (number === 1 ){
    return "End Turn/ Next Player up"
  }
  else if (( number > 1 ) && ( number <=6)){
   return number;
  }
  }

var total = 0;
var numbers = [1,2,3,4]
for( var i = 0; i <numbers.length; i+= 1) {
  total += numbers[i];
}



$(document).ready(function() {

});
