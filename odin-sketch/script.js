const canvas = document.getElementById('canvas');

let gridSize = 16;
let gridTotal = gridSize * gridSize;

let createGrid = function () {
    for (let i = 1; i <= gridTotal; i++) {
        let newElement = document.createElement("div");
        newElement.classList.add("grid-item");
        newElement.setAttribute("id", `grid-${i}`);
        canvas.appendChild(newElement);
        document.getElementById(`grid-${i}`).addEventListener("mouseover", (e) => { changeColor(i); });
        document.getElementById(`grid-${i}`).addEventListener("click", (e) => { resetColor(i); });

    }
}

function changeColor(i) {
    let itemToChange = document.getElementById(`grid-${i}`);
    if (!itemToChange.classList.contains("active")) {
        itemToChange.classList.add("active");
    }
}
function resetColor(i) {
    let itemToChange = document.getElementById(`grid-${i}`);
    itemToChange = itemToChange.classList.remove("active");
}


createGrid();