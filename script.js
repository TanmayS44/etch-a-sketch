let gridSize = 20;

let penColour = "yellow"

const gridContainer = document.querySelector(".grid-container");
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

function createGrid(sizeOfGrid) {
    while(sizeOfGrid > 0 && sizeOfGrid <= 10000) {
        let gridBox = document.createElement("div");
        gridBox.classList.add("grid-item");
        gridBox.classList.add("btn");
        gridContainer.appendChild(gridBox);
        sizeOfGrid--;
    }
}

createGrid(gridSize*gridSize);

// check for click and drag
let mouseDown = false;

document.addEventListener("mousedown", () => {
    mouseDown = true;
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});

const gridBoxes = document.querySelectorAll(".btn");
gridBoxes.forEach(setPenColour);

function setPenColour (currentValue) {
    currentValue.addEventListener("mouseover", () => {
        if (mouseDown) {
            currentValue.style["background-color"] = penColour;
        }
    });
}

const colourSelectorButton = document.getElementById("colour-selector")
colourSelectorButton.addEventListener("click", () => {
    penColour = prompt("Enter pen colour (single word basic colours only):");
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
    gridBoxes.forEach(function (currentValue) {
        currentValue.style["background-color"] = "black";
    });
});

const gridChangeButton = document.getElementById("change-grid-size");
gridChangeButton.addEventListener("click", () => {
    gridSize = prompt("Enter grid side X (Grid will be X * X units)");

    // Clear the existing grid items, then create new grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    createGrid(gridSize * gridSize);

    // Reattach event listeners to the new grid items
    const gridBoxes = document.querySelectorAll(".btn");
    gridBoxes.forEach(setPenColour);

    // Reattach event listener to the "Reset" button
    resetButton.addEventListener("click", () => {
        gridBoxes.forEach(function (currentValue) {
            currentValue.style["background-color"] = "black";
        });
    });
});
