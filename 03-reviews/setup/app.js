// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
 // selected ids
const selectIds = function (id){
   return document.getElementById(id);
}
// select class
const selectClass = function (cls){
  return document.querySelector(cls);
}

const img = selectIds("person-img");
const author = selectIds("author");
const job = selectIds("job");
const info = selectIds("info");
//  selecting buttons
const prevBtn = selectClass(".prev-btn");
const nextBtn = selectClass(".next-btn");

// random-btn
const randomBtn= selectClass(".random-btn");

let currentPerson = 0;
// showPerson
function showPerson(){
  const item = reviews[currentPerson];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// inistial window dom Load 
window.addEventListener("DOMContentLoaded" , ()=>{
  showPerson(currentPerson);
})
nextBtn.addEventListener("click" ,()=> {
  // currentPerson++;
  // if(currentPerson === reviews.length - 1 ) {
  //   currentPerson = 0;
  // }else currentPerson++;
  // showPerson();
  currentPerson++;
  if(currentPerson > reviews.length - 1 ) {
      currentPerson = 0;
    }
    showPerson();
})
prevBtn.addEventListener("click" ,()=> {
  // if(currentPerson === 0){
  //   currentPerson = reviews.length - 1;
  // }else currentPerson--;
  currentPerson--
  if(currentPerson < 0){
      currentPerson = reviews.length - 1;
    }
  showPerson();
 
})
// random person
randomBtn.addEventListener("click" , ()=> {
  const prevCurrentPerson = currentPerson;
  while(true){
    currentPerson = Math.trunc(Math.random() * reviews.length);
    if(prevCurrentPerson === currentPerson){
      continue;
    }
    break;
  }
  showPerson()
})