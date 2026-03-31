let divsArray = [];

const divContainer = document.querySelector(".gridContainer");


for(let i = 0; i < 16; i ++){
    for(let j = 0; j < 16; j++){
    const div = document.createElement("div");
    div.id = `div${i}-${j}`;
    div.classList.add("gridItem");
    divsArray.push(div);
    divContainer.appendChild(div);
    }
}