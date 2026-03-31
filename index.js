let divsArray = [];
let colorChoice = "";

const divContainer = document.querySelector(".gridContainer");
const newGrid = document.querySelector("#new");
const colorChoices = document.querySelector("#choices");

function generateGrid(n){ // generate grid of size n x n
    for(let i = 0; i < n; i ++){
        for(let j = 0; j < n; j++){
        const div = document.createElement("div");
        div.id = `div${i}-${j}`;
        div.classList.add("gridItem");
        div.style.width = (100/n)+"%";
        div.style.backgroundColor = "white";
        div.style.opacity = 1;
        divsArray.push(div);
        divContainer.appendChild(div);
        }
    }
}

function removeGrid(){ // remove the grid and clear array and colorChoice
    divsArray.forEach((e) => e.remove());
    divsArray.length = 0;
    colorChoice = "";
};

function randomizeRGB(){ // generate random RGB value
    let rgb1 = Math.floor(Math.random() * 256);
    let rgb2 = Math.floor(Math.random() * 256);
    let rgb3 = Math.floor(Math.random() * 256);
    return `(${rgb1}, ${rgb2}, ${rgb3})`;
}

function drawColor(square){ // change color of square to colorChoice

    if(colorChoice === "random"){
    square.style.backgroundColor = `rgb${randomizeRGB()}`;
    }
    else{square.style.backgroundColor = colorChoice;}
}


generateGrid(16); // generate initial grid


divContainer.addEventListener("mouseover", (e) => { // color square div when mouse hovers over it
        const chosen = e.target;
        console.log(chosen);
        if(chosen.hasChildNodes()){return;} // make sure target is not divContainer
        
        if(chosen.style.backgroundColor === "white"){
            drawColor(chosen);
            return;
        }

        if(chosen.style.opacity>0){
        drawColor(chosen);   
        chosen.style.opacity-= 0.1
        }
        
        // chosen.style.backgroundColor = "blue";
    })

newGrid.addEventListener("click", () => {
    const input = +prompt("How many squares per side do you want for your new grid?");
    if(input < 0 || input > 100){
        alert("The number can not be negative or above 100.");
        return;
    }
    else if(input === null || input === "" || input === 0){
        return;
    }
    removeGrid();
    generateGrid(input);
})

colorChoices.addEventListener("click", (e) => {
    const choice = e.target;
    colorChoice = choice.textContent.toLowerCase();
})

