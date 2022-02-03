document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square"); 
    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    });
    document.getElementById("restart").addEventListener('click', () => {
        window.location.reload();
    });
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;
    if (handleMove(position)) {
        setTimeout(() => {
            alert(" The Game Ends - The Winner was Player " + (playerTime+1));
        }, 10);
    }
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}