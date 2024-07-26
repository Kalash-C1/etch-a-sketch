const divs =[];
for(let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    divs[i] = div; 
    
}
const container = document.querySelector(".container");
for(let i = 0; i < 16; i++) {
    container.appendChild(divs[i]);
}