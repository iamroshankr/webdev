const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
var level = 0;
var clickCount = 0;
var check = false;

$(document).keypress(function(){
    if(!check){
        $("#level-title").text("Level " + level);
        nextSequence();
        check = true;
    }
});

function nextSequence(){
    level ++;

    $("h1#level-title").text("Level " + level);

    let rand = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[rand];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
}

function playSound(chosenColor) {
    switch(chosenColor)
    {
        case "red":
            new Audio("sounds/red.mp3").play();
            break;
        case "blue":
            new Audio("sounds/blue.mp3").play();
            break;
        case "green":
            new Audio("sounds/green.mp3").play();
            break;
        case "yellow":
            new Audio("sounds/yellow.mp3").play();
            break;
        default:
            new Audio("sounds/wrong.mp3").play();
    }
}

$("div.btn").click(function () {

    let userChosenColor = this.id;
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    clickCount++;
    
    checkAnswer();
    
});

function animatePress(chosenColor){
    $("#" + chosenColor).addClass("pressed");
    setTimeout(function(){
        $("#" + chosenColor).removeClass("pressed");
    },
    100);
}

function checkAnswer(){

    if(userClickedPattern[clickCount-1] == gamePattern[clickCount-1])
    {
        console.log("success");
    }
    else
    {
        $("#level-title").text("Game Over, Press any key to start again.");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout( function() { $("body").removeClass("game-over"); }, 200);
        userClickedPattern.splice(0, userClickedPattern.length);
        gamePattern.splice(0, gamePattern.length);
        check = false;
        level = 0;
        clickCount = 0;

    }

    if(clickCount == level && level != 0){
        userClickedPattern.splice(0, userClickedPattern.length);
        clickCount = 0;
        setTimeout(nextSequence, 1000);
    }
}

