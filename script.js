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

const sq = document.querySelectorAll(".square");
sq.forEach(sq => {
    sq.addEventListener("mouseenter", function(e) {
        e.target.style.backgroundColor = "red";
    });
    sq.addEventListener("mouseleave" , function(e) {
        e.target.style.backgroundColor = "white";
    });

});