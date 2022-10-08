const container = document.querySelector(".container");
console.log(container);

const colorChanger = () => {
  const r = Math.trunc(Math.random() * 255) + 1;
  const g = Math.trunc(Math.random() * 255) + 1;
  const b = Math.trunc(Math.random() * 255) + 1;
  container.style.backgroundColor = `rgb(${r}, ${g},${b} )`;
};

setInterval(colorChanger, 10);
