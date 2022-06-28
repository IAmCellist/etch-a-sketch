var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
slider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}` ;
}

slider.addEventListener("change", () => resetGrid())

let gridSize = slider.value;
const gridContainer = document.querySelector(".grid-container");
gridContainer.setAttribute("style", `grid-template-rows: repeat(${gridSize}, auto); 
                            grid-template-columns: repeat(${gridSize}, auto);`);

initializeGrid(gridSize);

function initializeGrid(gridSize) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let gridSquare = document.createElement("div");
        gridContainer.setAttribute("style", `grid-template-rows: repeat(${gridSize}, auto); 
                            grid-template-columns: repeat(${gridSize}, auto);`);
        gridSquare.addEventListener("mouseover", () => changeColor(gridSquare));
        gridSquare.classList.add("grid-square");
        gridContainer.append(gridSquare);
    }
}

function resetGrid() {
    let squares = gridContainer.getElementsByClassName("grid-square");
    for (let i = squares.length - 1; i >= 0; --i) {
        squares[i].remove();
    }
    let newGridSize = slider.value;
    initializeGrid(newGridSize);
}

function changeColor(gridSquare) {
    gridSquare.setAttribute("style", "background-color: grey");
}

function removeColor(gridSquare) {
    gridSquare.removeAttribute("background-color");
}

