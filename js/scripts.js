//---- Count to 6
// var score = [];
//
// function randomNumber(number){
//   var number = Math.floor((Math.random() * 6) + 1);
//     score.push(rollingTurn(number));
//     console.log("total", score);
// }

// function rollingTurn(number) {
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

// Business Logic for Player

function Person (name, score, total){
  this.name = name;
  this.score = [];
  this.total= total;
}

Person.prototype.onRoll = function () {
  var randomNumber = Math.floor((Math.random() * 6) + 1);
    if (randomNumber === 1 ){
      alert("Next Player");
      this.score.push(0);
    }
    else if (( randomNumber > 1 ) && ( randomNumber <= 6)){
     this.score.push(randomNumber);
    }
  }

Person.prototype.turnScore = function() {
  var total = 0;
  for( var i = 0; i <this.score.length; i+= 1) {
    if(this.score.includes(undefined)) {
      this.total = 0
    }
    else  {
      this.total = total += this.score[i]
    }
  }
}

Person.prototype.totalScore = function() {
  
}

function win(totalScore) {
  if (totalScore >= 100) {
    return alert("You win! Congratulations.");
  }
}

var pigDice = new Game();
var player1 = new Person("Blake")
var player2 = new Person("Ngan")
pigDice.addPlayer(player1)
pigDice.addPlayer(player2)
player1
// player1.addScore()
// player2.addScore()









// User logic for Game
$(document).ready(function() {
  $()

});
