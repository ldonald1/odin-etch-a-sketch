let divsArray = [];

const divContainer = document.querySelector(".gridContainer");
const newGrid = document.querySelector("#new");

function generateGrid(n){
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

function removeGrid(){
    divsArray.forEach((e) => e.remove());
    divsArray.length = 0;
};

function randomizeRGB(){
    let rgb1 = Math.floor(Math.random() * 256);
    let rgb2 = Math.floor(Math.random() * 256);
    let rgb3 = Math.floor(Math.random() * 256);
    return `(${rgb1}, ${rgb2}, ${rgb3})`;
}

generateGrid(16);


divContainer.addEventListener("mouseover", (e) => {
        const chosen = e.target;
        console.log(chosen);
        if(chosen.hasChildNodes()){return;}
        
        if(chosen.style.backgroundColor === "white"){
            chosen.style.backgroundColor = `rgb${randomizeRGB()}`;
            return;
        }

        if(chosen.style.opacity>0){
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
    removeGrid();
    generateGrid(input);
})

