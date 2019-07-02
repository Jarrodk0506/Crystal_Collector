$(document).ready(function(){


var target;
var score= 0;              //global variables
var wins= 0;
var geodeValue= 0;
var amethystValue= 0;
var iceValue= 0;
var diamondValue= 0;

function Start(){           //<-- Start game
score = 0;
wins = 0;       //reset your score and wins
    
//gather values for the target value and set each button value
target = [Math.floor(Math.random() * 101 ) + 19];
geodeValue = [Math.floor(Math.random() * 12 ) + 1];
amethystValue = [Math.floor(Math.random() * 12 ) + 1];
iceValue = [Math.floor(Math.random() * 12 ) + 1];
diamondValue = [Math.floor(Math.random() * 12 ) + 1];

//display wins , Your score and the score to match
var winDisplay = $('#wins').text(wins);
var scoreDisplay = $('#score').text(score);
var targetDisplay = $("#target").text(target);

//checks
console.log(geodeValue);
console.log(amethystValue);
console.log(iceValue);
console.log(diamondValue);
console.log(target);

////////// NEED: UPDATING WINS DISPLAY ///////////

//geode button
$('.geode').on('click', function(){
        score = parseInt(score) + parseInt(geodeValue);
        var scoreDisplay = $('#score').text(score);
        if(score == target){
            alert("You win!");
            winDisplay = wins++;
        }
        else if(score > target){
            alert("You lose!");
        }
});

//amethyst button
$('.amethyst').on('click', function(){     
        score = parseInt(score) + parseInt(amethystValue);
        var scoreDisplay = $('#score').text(score);
        if(score == target){
            alert("You win!");
            winDisplay = wins++;
        }
        else if(score > target){
            alert("You lose!");
        }
});

//ice button
$('.ice').on('click', function(){
    score = parseInt(score) + parseInt(iceValue);
    var scoreDisplay = $('#score').text(score);
    if(score == target){
        alert("You win!");
        winDisplay = wins++;
    }
    else if(score > target){
        alert("You lose!");
    }
});

//diamond button
$('.diamond').on('click', function(){ 
    score = parseInt(score) + parseInt(diamondValue);
    var scoreDisplay = $('#score').text(score);
    if(score == target){
        alert("You win!");
        winDisplay = wins++;
    }
    else if(score > target){
        alert("You lose!");
    }
});




}


Start();

});