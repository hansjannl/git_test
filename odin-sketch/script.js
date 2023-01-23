const canvas = document.getElementById('canvas');
const slider = document.getElementById('myRange');
slider.addEventListener("mouseup", function(){createGrid()})

let gridSize = slider.value;
let gridTotal = gridSize * gridSize;
let blockSize = 400 / gridSize;



let createGrid = function () {
    gridSize = slider.value;
 gridTotal = gridSize * gridSize;
 blockSize = 400 / gridSize;
     canvas.replaceChildren();
    for (let i = 1; i <= gridTotal; i++) {
        let newElement = document.createElement("div");
        newElement.classList.add("grid-item");
        newElement.setAttribute("id", `grid-${i}`);
        newElement.style.width = `${blockSize}px`;
        newElement.style.height = `${blockSize}px`;
        canvas.appendChild(newElement);
        document.getElementById(`grid-${i}`).addEventListener("mouseover", (e) => { changeColor(i); });
        document.getElementById(`grid-${i}`).addEventListener("click", (e) => { resetColor(i); });

    }
}

function changeColor(i) {
    let itemToChange = document.getElementById(`grid-${i}`);
    if (!itemToChange.classList.contains("active")) {
        itemToChange.classList.add("active");
        itemToChange.style.opacity = 0.1;
    }else if(itemToChange.style.opacity){
        let newValue = ((itemToChange.style.opacity*10) + 1)/10;
        itemToChange.style.opacity = newValue;
    }
}
function resetColor(i) {
    let itemToChange = document.getElementById(`grid-${i}`);
    itemToChange = itemToChange.classList.remove("active");
}

//run it once
createGrid();