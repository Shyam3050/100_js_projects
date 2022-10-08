// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setupItems)
// ****** FUNCTIONS **********

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
   <div class="btn-container">
     <button class="edit-btn">
       <i class="fas fa-edit"></i>
     </button>
     <button class="delete-btn">
       <i class="fas fa-trash"></i>
     </button>
   </div>`;
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    list.appendChild(element);
    displayAlert("Item Added succeesfully", "success");
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    editLocalStorage(editId,value);
    setBackToDefault();
  } else {
    displayAlert("please Enter Value", "danger");
  }
}

// displayAlert

function displayAlert(text, action) {
  // display alert
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
//  delete Item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  console.log(id);
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("Item removed", "danger");
  setBackToDefault();
  removeFromLocalStorage(id);
}
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // editable Element
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "edit";
}
// clear Items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
     localStorage.removeItem("list")
}

// setBackToDefault
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "Submit";
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  const item = getLocalStorage();
  item.push(grocery);
  localStorage.setItem("list", JSON.stringify(item));
  console.log(item);
}
function removeFromLocalStorage(id) {
 let items = getLocalStorage()
  items = items.filter(function (item) {
    return item.id !== id;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(editId, value) {
  let items = getLocalStorage();
  items = items.map(item => {
    if(item.id === editId){
      item.value = value;
    }
    return item;
  })
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// ****** SETUP ITEMS **********
function setupItems(){
  const items = getLocalStorage();
  if(items.length > 0){
    items.forEach(item => createListItem(item.id,item.value));
    container.classList.add("show-container")
  }
}
function createListItem(id,value){
  const element = document.createElement("article")
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
 <div class="btn-container">
   <button class="edit-btn">
     <i class="fas fa-edit"></i>
   </button>
   <button class="delete-btn">
     <i class="fas fa-trash"></i>
   </button>
 </div>`;
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  list.appendChild(element);
}