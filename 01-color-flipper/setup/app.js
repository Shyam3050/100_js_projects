const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// console.log(typeof document)
function colorChangetHandler() {
     const randomint = getRandomNumber();
     console.log(randomint)
    document.body.style.backgroundColor = colors[randomint];
    color.textContent = colors[randomint];
}
function getRandomNumber() {
     return Math.floor(Math.random() * colors.length);
}
// click event
btn.addEventListener("click" , colorChangetHandler);