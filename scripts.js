const content = document.querySelector(".content");
const containerPixels = 640

function createGrid(size){
    content.innerHTML = "";
    
    const squareSize = (containerPixels / size);

    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement("div");
        square.classList.add("square")
        
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        content.appendChild(square);
    }

}

let gridSize = 16;


createGrid(gridSize)

const newGrid = document.querySelector("#new-grid").addEventListener("click", () => {
    const input = parseInt(prompt("Choose Size", 16), 10);
    if (input > 0 && input < 100){
        gridSize = input;
        
        createGrid(gridSize);
    }
    else {
        alert("Invalid input");
    }
});
