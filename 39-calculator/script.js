const calcArea = document.querySelector("textarea");

// Add numbers
// Add operators
// Delete inputs
// Clear all the inputs
// Calculate

// functions

// // Add Numbers
const addNums = (num) => {
  const { value } = calcArea;
  const check = value.length === 0 && num === ".";

  if (check) {
    // it only happen in empty value of calArea and when we add (.) dot operator at point.
    alert("Enter Valid one");
  }
  if (!check) {
    calcArea.value += num;
  }
  console.log(calcArea.value);
};

// adding opreator
const oprList = ["+", "-", "*", "/", "%", "."];

const addOpreatro = function (opreator) {
  const { value } = calcArea;
  const lastChar = value[value.length - 1];
  if (lastChar !== opreator) {
    if (value.length > 0) {
      calcArea.value += opreator;
    }
  }
  if (oprList.includes(lastChar)) {
    calcArea.value = value.substr(0, value.length - 1) + opreator;
  }
  console.log(calcArea.value);
};
// Delete inputs

const del = function () {
  let { value } = calcArea;
  if (value.length > 0) {
    calcArea.value = value.substr(0, value.length - 1);
  }
};
// clear all inputs
const clear = function () {
  calcArea.value = "";
};

// calculate
const calculate = function () {
  const { value } = calcArea;
  const result = eval(value);
  if (!isNaN(result)) {
    calcArea.value = result;
  } else {
    alert("wrong expression, Please check your input");
  }
};

// adding Events

const allButtons = document.querySelectorAll(".button-group > span");
allButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.classList);
    const { classList, textContent } = e.target;
    console.log(classList, textContent);
    if (classList.contains("num")) {
      addNums(textContent);
    }
    if (classList.contains("opr")) {
      addOpreatro(textContent);
    }
    if (classList.contains("calc")) {
      calculate();
    }
    if (classList.contains("clear")) {
      clear();
    }
    if (classList.contains("delete")) {
      del();
    }
  });
});

// Keyboard Events

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  switch (e.key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
      addNums(e.key);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      addOpreatro(e.key);
      break;
    case "=":
    case "Enter":
      calculate();
      break;
    case "Backspace":
      del();
      break;
    case "c":
      clear();
      break;
    default:
  }
});
