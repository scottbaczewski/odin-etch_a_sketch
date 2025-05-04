const container = document.querySelector('div.container');
const startButton = document.querySelector('button.start');
startButton.addEventListener("click", start);

function start() {
    container.innerHTML = '';
    const numSquares = prompt("How many rows/columns would you like? (Max: 100)");
    if (numSquares > 0 && numSquares <= 100) {
        createSquares(numSquares);
    } else {
        alert("Please enter a number between 1 and 100");
        return start();
    }
}

function createSquares(num) {
    for (let i = 0; i < num * num; i++) {
        let square = document.createElement('div');
        square.setAttribute("class", "squareBlue");
        square.setAttribute("style", `height:${(1 / num) * 100}%`);
        square.setAttribute("style", `width:${(1 / num) * 100}%`);
        square.addEventListener("mouseover", () => {
            square.className = 'squareRed';
        })
    container.appendChild(square);
    }
}