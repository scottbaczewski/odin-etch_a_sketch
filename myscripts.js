const container = document.querySelector('div.container');
const startButton = document.querySelector('button.start');
startButton.addEventListener("click", createSquares);

function createSquares() {
    container.innerHTML = '';
    let numSquares = prompt("How many rows/columns would you like? (Max: 100)");
    for (let i = 0; i < numSquares * numSquares; i++) {
        let square = document.createElement('div');
        square.setAttribute("class", "squareBlue");
        square.setAttribute("style", `height:${(1 / numSquares) * 100}%`);
        square.setAttribute("style", `width:${(1 / numSquares) * 100}%`);
        square.addEventListener("mouseover", () => {
            square.className = 'squareRed';
        })
    container.appendChild(square);
    }
}