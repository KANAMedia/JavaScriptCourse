/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, previousDice, activePlayer, gamePlaying, scoreToWin;

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
    previousDice = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
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
        var is2nd6 = false;
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
       
        // save dice if 6 else delete previous dice
        if(dice === 6 && previousDice === 0){
            previousDice = dice;
        } else if(dice <= 5){
            previousDice = 0;
        } else {
            is2nd6 = true;            
        }

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        var currentDOM = document.querySelector('#current-' + activePlayer)
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1 AND its not the 2nd 6 in a row
        if (dice !== 1 && is2nd6 === false) {
            // Add score
            roundScore += dice; // same as --> roundScore = roundScore + dice;
            currentDOM.textContent = roundScore; 
        }else if(is2nd6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else {
            nextPlayer();
        }
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
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    } 
});

document.querySelector('.btn-new').addEventListener('click', init);