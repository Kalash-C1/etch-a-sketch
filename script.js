let ip = prompt("Enter the number for which u want a grid: ");
if(ip > 100) {
    alert("Maximum value is 100");
}
else {
    const divs =[];
    for(let i = 0; i < ip*ip; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        divs[i] = div; 
        
    }
    const container = document.querySelector(".container");
    for(let i = 0; i < ip*ip; i++) {
        container.appendChild(divs[i]);
    }
    function randomInt() {
        return Math.floor(Math.random()*255);
    }
    const sq = document.querySelectorAll(".square");
    sq.forEach(sq => {
        sq.addEventListener("mouseenter", function(e) {
            const r = randomInt();
            const g = randomInt();
            const b = randomInt();
            e.target.style.backgroundColor = `rgb(${r}, ${r}, ${r})`;
            // e.target.style.backgroundColor = "blue";
        });
    });
    sq.forEach(sq => {
        sq.style.width = (100/ip) + "%";
        sq.style.height = (100/ip) + "%";
    });
}