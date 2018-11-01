//Business Logic for Game
function Game(){
  this.point = [];
  this.players = [];
}

 Game.prototype.addPlayer = function(person) {
   this.players.push(person)
 }

// Business Logic for Player

function Person (name, score, total, final){
  this.name = name;
  this.score = [];
  this.total= total;
  this.finalTotal = [];
}

Person.prototype.onRoll = function () {
  var randomNumber = Math.floor((Math.random() * 6) + 1);
    if (randomNumber === 1 ){
      alert("Next Player");
      this.score.push(1);
    }
    else if (( randomNumber > 1 ) && ( randomNumber <= 6)){
     this.score.push(randomNumber);
    }
    console.log(this.score);
  }

Person.prototype.turnScore = function() {
  var total = 0;
  for( var i = 0; i <this.score.length; i+= 1) {
    if(this.score.includes(1)) {
      this.total = 0
    }
    else  {
      this.total = total += this.score[i]
    }
  }
  this.score = [];
  return this.total
  console.log(this.total)
}

Person.prototype.totalScore = function() {
 this.finalTotal.push(this.total);
 console.log(this.total)
 this.total = 0;
}

Person.prototype.sumScore = function () {
  for( var i = 0; i <this.finalTotal.length; i+= 1) {
    if (finalTotal >= 100) {
      return alert("You win! Congratulations.");
    }
    console.log(this.total);
    console.log(this.finalTotal);
  }
}

var pigDice = new Game();
var player1 = new Person("Blake")
var player2 = new Person("Ngan")
pigDice.addPlayer(player1)
pigDice.addPlayer(player2)
// player1
// player1.addScore()
// player2.addScore()

// User logic for Game
function rollingDice() {
  var display = [];
  $("#rollPlayerOne").click(function(){
    player1.onRoll();
  });
  $("#holdPlayerOne").click(function(){
    var test = player1.turnScore();
    var string = test.toString()
    // console.log("look",string)
    $("#playerOneTurnTotal").text(string);

  });
  $("#rollPlayerTwo").click(function(){
    player2.onRoll();
  });
  $("#holdPlayerTwo").click(function(){
    var test = player2.turnScore();
    var string = test.toString()
    // console.log("look",string)
    $("#playerTwoTurnTotal").text(string);
  });
  // console.log(this.score);
};




$(document).ready(function() {
  rollingDice();
  $("#rollPlayerOne").click(function(event) {
    event.preventDefault();
    // $("#playerOneTurnTotal").text(player1.totalScore);
    // $("#playerTwoTurnTotal").text(player2.totalScore);
  });
});
