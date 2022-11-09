var buttonColors = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(".btn").click(function(event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer((userClickedPattern.length) - 1);
});
$(document).keypress(function(e) {
  if (!started) {
    $("#level-title").text("Level" + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);

  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColor);
}

function playSound(name) {
  var soundToplay = new Audio("sounds/" + name + ".mp3");
  soundToplay.play();
}

function animatePress(currentColor) {

  var addPressed = "." + currentColor;
  $(addPressed).addClass("pressed");
  setTimeout(function() {
    $(addPressed).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentlevel) {
  if (gamePattern[currentlevel] === userClickedPattern[currentlevel]) {
    // nextSequence();
    if(gamePattern.length===userClickedPattern.length)
    {
      setTimeout(function() {
      nextSequence();
      }, 1000);
    }
  }
  else
   {
    var wrongAns=new Audio("sounds/wrong.mp3");
    wrongAns.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over , Press Any Key To restart");
    startOver();
  }
}

function startOver()
{
  level=0;
  gamePattern=[];
  userClickedPattern=[]; 
  started=false;
}
