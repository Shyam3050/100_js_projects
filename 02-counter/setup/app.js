const resultBoard = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
let val = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.target.classList;
    if (styles.contains("decrease")) {
      val--;
    } else if (styles.contains("increase")) {
      val++;
    } else val = 0;

    // color changer
    if (val > 0) {
      resultBoard.style.color = "green";
    } else if (val < 0) {
      resultBoard.style.color = "red";
    } else if (val === 0) resultBoard.style.color = "black";
    resultBoard.textContent = val;
  });
});
// btns[0].addEventListener("click" , () => {
//     val--;
//     resultBoard.textContent = val;
//     colorChanger(val);

// })
// btns[1].addEventListener("click" , () => {
//     val = 0;
//     resultBoard.textContent = val;
//     colorChanger(val);

// })
// btns[2].addEventListener("click" , () => {
//     val++;
//     resultBoard.textContent = val;
//     colorChanger(val);
// })
// function colorChanger (val) {
//     if(val === 0 ) return resultBoard.style.color = "black";
//     if(val > 2 ) return resultBoard.style.color = "green"
//     if(val < 0 ) return resultBoard.style.color = "red"

// }
