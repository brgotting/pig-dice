//---- Count to 6
var score = [];

function randomNumber(number){
  var number = Math.floor((Math.random() * 6) + 1);
    score.push(RollingTurn(number));
    console.log("total", score);
}

function RollingTurn(number) {
  if (number === 1 ){
    return score = 0
  }
  else if (( number > 1 ) && ( number <=6)){
   return number;
  }
  }

function getTotal(){
  var total = 0;
  for( var i = 0; i <score.length; i+= 1) {
    total += score[i];
  }
  // return total;
}

$(document).ready(function() {

});
