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

function getRandomColorHex() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function createSquares(num) {
    for (let i = 0; i < num * num; i++) {
        let square = document.createElement('div');
        square.setAttribute("class", "square");
        square.setAttribute("style", `height:${(1 / num) * 100}%`);
        square.setAttribute("style", `width:${(1 / num) * 100}%`);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColorHex();
        })
    container.appendChild(square);
    }
}
