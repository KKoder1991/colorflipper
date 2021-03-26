const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function change_color(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function() {
    const randomColor = change_color();
    document.body.style.backgroundColor = colors[randomColor];
    color.innerHTML = colors[randomColor];
} )



