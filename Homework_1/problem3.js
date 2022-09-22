
let colors = ["red", "green", "yellow", "blue", "violet"];

function changeColor(color) {
    this.style.color = color;

}
for (let i = 1; i <= 5; i++) {
let element = document.getElementById("div" + i);
element.addEventListener("click", changeColor.bind(element, colors[i - 1]));

}
