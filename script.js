"use strict";

let score = 20;
let number = Math.trunc(Math.random()*20)+1;
console.log(number);
//document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click',function() {
    const guess = document.querySelector('.guess').value;

    if(!guess) {
        document.querySelector('.message').textContent = "No Number! 😓"
    }
    else if(guess < number){
        if(score > 1) {
        document.querySelector('.message').textContent = "The secret number is higher! 👆"
        document.querySelector('.score').textContent = score;
        score--;}
        else{
            document.querySelector('.message').textContent = "You lose! 😭"
            document.querySelector('.score').textContent = 0;
        }
    }
    else if(guess > number){
        if(score > 1) {
        document.querySelector('.message').textContent = "The secret number is lower! 👇"
        document.querySelector('.score').textContent = score;
        score--;}
        else{
            document.querySelector('.message').textContent = "You lose! 😭"
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess == number){
        document.querySelector('.message').textContent = "YOU WIN! 😁👏"
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.guess').style.backgroundColor = '#60b347';
        document.querySelector('.check').style.backgroundColor = '#60b347';
        document.querySelector('.check').style.color = 'black';
        document.querySelector('.restart').style.backgroundColor = '#60b347';



        document.querySelector('.number').textContent = number;
    }

})

document.querySelector('.restart').addEventListener('click', function() {
    let score = 20;
    let number = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = 'mediumpurple';
    document.querySelector('.guess').style.backgroundColor = 'mediumpurple';
    document.querySelector('.check').style.backgroundColor = 'mediumpurple';
    document.querySelector('.restart').style.backgroundColor = 'mediumpurple';

})