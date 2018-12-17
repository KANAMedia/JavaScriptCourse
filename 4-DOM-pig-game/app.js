/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, scoreToWin;


init();

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    previousDice = 0;
    gamePlaying = true;

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    // getElementById --> faster - resource saving
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {  
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
}


function submitStartScreenData() {

    // get all the Information ( ? creat an Object ?)
    var namePlayer0 = document.getElementById('player0').value;
    var namePlayer1 = document.getElementById('player1').value;
    scoreToWin = document.getElementById('winScore').value;

    // If the form is filled
    if(namePlayer0 && namePlayer1 && scoreToWin){
        
        // Manipulate the DOM with the Playernames
        document.getElementById('name-0').textContent = namePlayer0;
        document.getElementById('name-1').textContent = namePlayer1;

        // animate the startscreen out
        document.querySelector('.startscreen').style.animationPlayState = 'running';
    }else { // show that something went rong
        document.getElementById('submit').classList.toggle('submit__incomplete');
        document.getElementById('submit').value = 'pls fill all the fealds and click again :)';
    }
}

document.querySelector('.btn-roll').addEventListener('click', function() { // <-- Anonymous function
    if(gamePlaying){
         
        function dice() {
            // Random number
            var dice = Math.floor(Math.random() * 6) + 1;
            return dice;
        }

        function displayDice(dice, diceClass) {
            var diceDOM = document.querySelector(diceClass);
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';
        }

        function updateRoundScore(dice1,dice2) {
            var currentDOM = document.querySelector('#current-' + activePlayer);
            if(dice1 === 1 || dice2 === 1) var is1 = true;
            if(dice1 === 6 && dice2 === 6) var is2end6 = true;

            if(is1){ // delete Round Score if 1
                currentDOM.textContent = 0; 
                nextPlayer();
            } else if(is2end6){ // delete Global Score if second 6
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = '0';
                nextPlayer();
            } else { // else add to current Round Score
                roundScore += (dice1 + dice2); // same as --> roundScore = roundScore + dice1 + dice2;
                currentDOM.textContent = roundScore; 
            }
        }
        
        console.log(`${document.getElementById(`name-${activePlayer}`).textContent}`);
        dice1 = dice();
        console.log(`Dice1: ${dice1}`);
        dice2 = dice();
        console.log(`Dice2: ${dice2}`);
        displayDice(dice1,'.dice-0');
        displayDice(dice2,'.dice-1');
        updateRoundScore(dice1,dice2);
        console.log('--------------');
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        var scoresDOM = document.querySelector('#score-' + activePlayer);

        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore; // same as --> scores[acitvePlayer] = scores[acitvePlayer] + roundScore;

        // Update the UI
        scoresDOM.textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= scoreToWin) {
            scoresDOM.textContent = 'WINNER!'
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    } 
});

document.querySelector('.btn-new').addEventListener('click', init);