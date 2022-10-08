// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => {
    links.classList.toggle("show-links");
})