//Business Logic for Game
function Game(){
  this.point = [];
  this.players = [];
}

Game.prototype.addPlayer = function(person) {
  this.players.push(person)
}

// Business Logic for Player

function Person (name, score, total, final, sum){
  this.name = name;
  this.score = [];
  this.total= total;
  this.finalTotal = [];
  this.sum = sum
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
  return randomNumber;
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
  return this.finalTotal;
}

Person.prototype.finalScore = function () {
  var total = 0
  for( var i = 0; i <this.finalTotal.length; i+= 1) {
    this.sum = total += this.finalTotal[i]
    // return alert("You win! Congratulations.");
  }
  return this.sum;
}

var pigDice = new Game();
var player1 = new Person();
var player2 = new Person();

pigDice.addPlayer(player1)
pigDice.addPlayer(player2)

// User logic for Game
function rollingDice() {
  $("#rollPlayerOne").click(function(){
    var seeScore = player1.onRoll();
    $("#playerOneScore").text(seeScore);
    // console.log("look", seeScore)
  });

  $("#holdPlayerOne").click(function(){
    var test = player1.turnScore();
    var string = test.toString();
    var count = player1.totalScore();
    var allOne = player1.finalScore();
    $("#playerOneTurnTotal").text(string);
    $("#playerOneTotalScore").text(allOne);
    if (allOne >= 100) {
      alert("You win! Congratulations.");
    }
  });

  $("#rollPlayerTwo").click(function(){
    var seeScore = player2.onRoll();
    $("#playerTwoScore").text(seeScore);
  });

  $("#holdPlayerTwo").click(function(){
    var test = player2.turnScore();
    var string = test.toString()
    var count = player2.totalScore();
    var allTwo = player2.finalScore();
    $("#playerTwoTurnTotal").text(string);
    $("#playerTwoTotalScore").text(allTwo);
    if (allTwo >= 100) {
      alert("You win! Congratulations.");
    }
  });
};



$(document).ready(function() {
  rollingDice();
  $("#rollPlayerOne").click(function(event) {
    event.preventDefault();
    // $("#playerOneTurnTotal").text(player1.totalScore);
    // $("#playerTwoTurnTotal").text(player2.totalScore);
  });
});
