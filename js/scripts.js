//---- Count to 6
// var score = [];
//
// function randomNumber(number){
//   var number = Math.floor((Math.random() * 6) + 1);
//     score.push(RollingTurn(number));
//     console.log("total", score);
// }

// function RollingTurn(number) {
//   if (number === 1 ){
//     return score = 0
//   }
//   else if (( number > 1 ) && ( number <=6)){
//    return number;
//   }
//   }
//
// function getTotal(){
//   var total = 0;
//   for( var i = 0; i <score.length; i+= 1) {
//     total += score[i];
//   }
//   // return total;
// }

//Business Logic for Game
function Game(){
  this.point = [];
  this.players = [];
}
 Game.prototype.addPlayer = function(person) {
   this.players.push(person)
 }

 Game.prototype.addPoint = function(score) {
   this.point = this.point + 1
 }

Game.prototype.onRoll = function(number){
  if (number === 1 ){
    this.point = 0
  }
  else if (( number > 1 ) && ( number <=6)){
   this.point = number;
  }
}




// Business Logic for Player
function Person (name, score, total){
  this.name = name;
  this.score = [];
  this.totalScore= total;
}

Person.prototype.onRoll = function randomNumber(number){
  var number = Math.floor((Math.random() * 6) + 1);
    this.score.push(RollingTurn(number));
}

function RollingTurn(number) {
  if (number === 1 ){
    return score = 0
  }
  else if (( number > 1 ) && ( number <=6)){
   return number;
  }
}

Person.prototype.addScore = function() {
  var total = 0;
  for( var i = 0; i <this.score.length; i+= 1) {
    // this.score =
    this.totalScore = total += this.score[i];
  
    // console.log("total", this.score);
  }
  // return total;
}







var pigDice = new Game();
var player1 = new Person("Blake", 3)
var player2 = new Person("Ngan", 100)
pigDice.addPlayer(player1)
pigDice.addPlayer(player2)
pigDice.addPoint(player1)
pigDice.onRoll(player1)
pigDice.onRoll()
player1.onRoll()
player1.onRoll()
player1.onRoll()
player1









// User logic for Game
$(document).ready(function() {

});
