/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// initially do not render dice image
document.querySelector('.dice').style.display = 'none';

// initially set scores to zero according to id
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

document.querySelector('.btn-roll').addEventListener('click', function () {
  let dice = Math.floor(Math.random() * 6) + 1;
  let diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
})




// document.querySelector('#current-' + activePlayer).textContent = dice;
// selects "current-" object in document and passes value as text, ie textContent.  textContent cannot pass HTML

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// passing interpretable HTML value
// this method takes a generated random number (dice) and passes it into the DOM