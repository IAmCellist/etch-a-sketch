let gridSize = prompt("Enter the grid size: ");
const gridContainer = document.querySelector(".grid-container");
gridContainer.setAttribute("style", `grid-template-rows: repeat(${gridSize}, auto); 
                            grid-template-columns: repeat(${gridSize}, auto);`);

for (let i = 0; i < (gridSize * gridSize); i++) {
    let gridSquare = document.createElement("div");
    gridSquare.addEventListener("mouseover", () => changeColor(gridSquare));
    gridSquare.classList.add("grid-square");
    gridContainer.append(gridSquare);
}

function resetGrid() {
    let squares = document.querySelectorAll(".grid-square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove("color");
    }
}

function changeColor(gridSquare) {
    gridSquare.classList.add("color");
}

