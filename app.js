var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140, 150, 160];

const player1_button = document.getElementById('player_1');
console.log(player1_button);

const player2_button = document.getElementById('player_2');
console.log(player2_button);

player1_button.addEventListener('click', rollDice_1);
player2_button.addEventListener('click', rollDice_2);

var player1 = ["ProGrad", 0, 1000];
var player2 = ["FACEPrep", 0, 1000];

function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("Player 1 rolls", position);
    changePosition_1(player1[1], position);
}

function changePosition_1(old, currentPosition) {
    var newPosition = old + currentPosition;
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length) {
        updateMoney = player1[2] - board[p1 - 1];
    } else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log(updateMoney);
}

function rollDice_2() {
    let position2 = Math.floor(Math.random() * 6) + 1;
    console.log("Player 2 rolls", position2);
    changePosition_2(player2[1], position2);
}

function changePosition_2(old, currentPosition) {
    var newPosition_2 = old + currentPosition;
    player2[1] = newPosition_2;
    console.log(player2[1]);
    updateMoney_2(player2[1]);
}

function updateMoney_2(p2) {
    var updateMoney2 = 0;
    if (p2 < board.length) {
        updateMoney2 = player2[2] - board[p2 - 1];
    } else {
        p2 = p2 % 15;
        updateMoney2 = player2[2] - board[p2 - 1];
    }
    console.log(updateMoney2);
}