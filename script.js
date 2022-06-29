'use strict';

// console.log(document.querySelector('.message').textContent = 'Lol');
let secNumber = Math.trunc(Math.random()*20 + 1);
let highScore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!'
    }else if(guess === secNumber) {
        document.querySelector('.message').textContent = 'You Win!!';
        document.querySelector('.number').textContent = secNumber;
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('body').style.backgroundColor = 'Green';
        document.querySelector('.check').disabled = true;
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
    }else if(guess > secNumber){
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You Lose!';
            document.querySelector('.score').textContent = 0;
        }
        
    }else if(guess < secNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You Lose!';
            document.querySelector('.score').textContent = 0;
        };
        
    };
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secNumber = Math.trunc(Math.random()*20 + 1);
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start Guessing....';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.check').disabled = false;
});