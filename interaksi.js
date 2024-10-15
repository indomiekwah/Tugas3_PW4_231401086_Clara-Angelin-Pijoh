let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const playerTurn = document.getElementById('player-turn');
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //Vertical
    [0, 4, 8], [2, 4, 6] // Diagonal
];

function checkWinner () {
    let winner = null;
    winningCombinations.forEach(combination => {
        const [a, b, c] = combination;
        if(cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            winner = cells[a].textContent;
        }
    });
    if (winner) {
        alert(`Player ${winner} wins!`);
    } else if ([...cells].every(cell => cell.textContent !== '')) {
        alert("Tie!");
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(cell.textContent === '') {
            cell.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            playerTurn.textContent = `Player ${currentPlayer === 'X' ? 1 : 2}'s Turn`;
        }
    });
});

document.getElementById('reset-button').addEventListener('click', resetGame);



