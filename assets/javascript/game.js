//Start the Game
//Create Game Object

var gameState = {
//set keys and parameters
//targetNumber is an A.I. that player has to match to win
    targetNumer : randomNumberGenerate(19,120);
    wins : 0,
    losses : 0,
    resultNumber : 0,
//key as a function 
    updateResult: function(num) {
      this.updateResult +=;

//jquery to display result to html
      $("#result").html("total: " + this.resultNumber);
      //this === crystalGame object
        if(this.resultNumber > this.targetNumber) {
          this.losses++;
        $("#loss").html("losses " + this.loss);
        this.gameReset();
        } else if (this.resultNumber === this.targetNumber) {
          this.wins++;
        $("wins").html("wins: " + this.wins);
        this.gameReset();
        } else {
//do nothing when both condition are not meet
          return;
        }

      },
//restart game once player lose or win    
    gameReset: function(){

      gameState.targetNumber.targetNumber = randomNumberGenerate(19,120);
      $("number-to-guess").text(gameState.targetNumber);

// set resultNumber to 0, display reset value
      $("#result").html("total " + gameState.resultNumber);

    }
};

//create a random number that can be used by gems and target number.
function randomNumberGenerate(min,max) {
  return Math.floor(Math.random()*(max-min +1)+ min);
}

//gems object 
//create gems and assign random values

var gemsValue = {

  gems : [],
//replace a random index with a gem equivalent to 1
  replaceOnce : function(max) {
    var gemNumIndex = Math.floor(Math.random()* (max));
//splice(indexToRemove, elementToDelete, valueToBeAdded) 
    this.gems.splice(gemNumIndex, 1, 1);   
  },
// add gems a random number to gemsValue array
  assginNumber : function() {
    while(this.gem.length < 4){
      var num = randomNumberGenerate(2,12)
// gems array doesn't already have num add num
      if (!this.gems.includes(num)) {
        gemsValue.gems.push(num);
      }
    }
    this.replaceOne(this.gems.length);
  },
  
  assignValueToHtml : function() {
//display button value to html
    $('.btn1').val(this.gems[0]);
    $('.btn1').val(this.gems[1]);
    $('.btn1').val(this.gems[2]);
    $('.btn1').val(this.gems[3]);

  },

  resetRandomValue : function() {
      this.gems=[];
      this.assginNumber();
      this.assignValueToHtml();
  },
};

//start game
$(document).ready(function() {
  randomNumberGenerate(19,120);

  $("#number-to-guess").text(gameState.targetNumber);
  $("#wins").html("wins: " + gameState.wins);
  $("#losses").html("losses: " + gameState.losses);
      $("#result").html("total: " + gameState.resultNumber);
      gemsValue.assignNumber(); //on ready assign gem value
      gemsValue.assignValueToHtml(); // give buttons value

      //if button (this) is clicked the value assigned is add to a counter array
      // bind function to click of buttons
      $(".btn").on("click", function(){ 
        var clickValue = parseInt($(this).val());
        gameState.updateResult(clickValue);
      });

      console.log("button value: " + gemsValue.gems);
    });

}
