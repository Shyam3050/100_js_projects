//using selectors inside the element
// traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// const questions = document.querySelectorAll(".question")
// console.log(questions)
// btns.forEach(function(btn) {
//     btn.addEventListener("click", (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         questions.forEach(question => question.classList.remove("show-text"));
//         question.classList.toggle("show-text");

        
//     })
// })

// using selector inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
const btn = question.querySelector(".question-btn");
btn.addEventListener("click" , (e) =>{
    questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
    })
    question.classList.toggle("show-text");
})
})