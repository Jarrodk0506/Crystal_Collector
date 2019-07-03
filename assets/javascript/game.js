$(document).ready(function(){


var target;
var score= 0;              //global variables
var wins= 0;
var geodeValue= 0;
var amethystValue= 0;
var iceValue= 0;
var diamondValue= 0;


function Start(){
    score = 0;
    wins = 0;
}

//function that triggers when you win
function win(){
    alert("You win!");
    wins = wins + 1;
    score = 0;

    target = [Math.floor(Math.random() * 101 ) + 19];
    geodeValue = [Math.floor(Math.random() * 12 ) + 1];
    amethystValue = [Math.floor(Math.random() * 12 ) + 1];
    iceValue = [Math.floor(Math.random() * 12 ) + 1];
    diamondValue = [Math.floor(Math.random() * 12 ) + 1];
    
    var winDisplay = $('#wins').text(wins);
    var scoreDisplay = $('#score').text(score);
    var targetDisplay = $("#target").text(target);
}

//function that triggers when you lose
function lose(){
    alert("You lose! Try again");
    wins = 0
    score = 0;

    target = [Math.floor(Math.random() * 101 ) + 19];
    geodeValue = [Math.floor(Math.random() * 12 ) + 1];
    amethystValue = [Math.floor(Math.random() * 12 ) + 1];
    iceValue = [Math.floor(Math.random() * 12 ) + 1];
    diamondValue = [Math.floor(Math.random() * 12 ) + 1];
    
    var winDisplay = $('#wins').text(wins);
    var scoreDisplay = $('#score').text(score);
    var targetDisplay = $("#target").text(target);
}

   
    
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


//geode button
$('.geode').on('click', function(){
        score = parseInt(score) + parseInt(geodeValue);
        var scoreDisplay = $('#score').text(score);
        if(score == target){
            win();
        }
        else if(score > target){
            lose();
        }
});

//amethyst button
$('.amethyst').on('click', function(){     
        score = parseInt(score) + parseInt(amethystValue);
        var scoreDisplay = $('#score').text(score);
        if(score == target){
            win();
        }
        else if(score > target){
            lose();
        }
});

//ice button
$('.ice').on('click', function(){
    score = parseInt(score) + parseInt(iceValue);
    var scoreDisplay = $('#score').text(score);
    if(score == target){
        win(); 
    }
    else if(score > target){
        lose();
    }
});

//diamond button
$('.diamond').on('click', function(){ 
    score = parseInt(score) + parseInt(diamondValue);
    var scoreDisplay = $('#score').text(score);
    if(score == target){
        win(); 
    }
    else if(score > target){
        lose();
    }
});



Start();





});