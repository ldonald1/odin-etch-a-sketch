let divsArray = [];

const divContainer = document.querySelector(".gridContainer");
const newGrid = document.querySelector("#new");

function generateGrid(n){
    for(let i = 0; i < n; i ++){
    for(let j = 0; j < n; j++){
    const div = document.createElement("div");
    div.id = `div${i}-${j}`;
    div.classList.add("gridItem");
    
    divsArray.push(div);
    divContainer.appendChild(div);
        }
    }
}

generateGrid(16);

divContainer.addEventListener("mouseover", (e) => {
        const chosen = e.target;
        console.log(chosen);
        if(chosen.hasChildNodes()){return;}
        chosen.style.backgroundColor = "blue";
    })

newGrid.addEventListener("click", () => {
    const input = +prompt("How many squares per side do you want for your new grid?");

})

