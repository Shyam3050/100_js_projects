const shop = document.getElementById("shop");
const cartItem = document.getElementById("cartItem");

let basket = JSON.parse(localStorage.getItem("data")) || [];

// functions start
function addBtn(element) {
  const id = element.id.slice(0, -1);
  const search = basket.find((item) => item.id === id);
  element.innerHTML = ` <i class="bi bi-dash-lg" onclick= "decrement(${id})"></i>
  <div class="quantity" id = ${id}>${!search ? 0 : search.item}</div>
  <i class="bi bi-plus-lg" onclick = "increment(${id})"></i>`;
  const quantityElement = document.getElementById(id);
  increment(quantityElement);
}

const generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      const { id, name, price, desc, img } = item;
      const search = basket.find((item) => item.id === id);
<<<<<<< HEAD

      const buttons = `<i class="bi bi-dash-lg" onclick= "decrement(${id})"></i>
        <div class="quantity" id = ${id}>${!search ? 0 : search.item}</div>
        <i class="bi bi-plus-lg" onclick = "increment(${id})"></i>`;

=======
      let buttons = null;
      if (search) {
        buttons = `
        <i class="bi bi-dash-lg" onclick= "decrement(${id})"></i>
  <div class="quantity" id = ${id}>${!search ? 0 : search.item}</div>
  <i class="bi bi-plus-lg" onclick = "increment(${id})"></i>
        `;
      }
>>>>>>> 459557f5f90e32888e165dbe6a44f4aab3dc6a0f
      return `<div class="item" id="product-id-${id}">
    <img src="./${img}"  width = "220"alt="clothing store" />
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="price_quantity">
        <h2>$ ${price}</h2>
        <div class="buttons" id = ${id + "1"}>
<<<<<<< HEAD
          ${search ? buttons : `<p onClick = addBtn(${id + "1"})> Add </p>`}
=======
        ${
          buttons
            ? buttons
            : '<p onClick = addBtn(${id + "1"}) style = "cursor: pointer"> Add </p>'
        }  
>>>>>>> 459557f5f90e32888e165dbe6a44f4aab3dc6a0f
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

function increment(id) {
  const selectedItem = id;
  console.log(selectedItem);
  const search = basket.find((item) => item.id === selectedItem.id);
  if (!search) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
}
function decrement(id) {
  const selectedItem = id;
  console.log(selectedItem);
  const search = basket.find((item) => item.id === selectedItem.id);
  if (!search) return;
  if (search.item === 1) {
    selectedItem.parentElement.innerHTML = `
<<<<<<< HEAD
    <p onClick = addBtn(${selectedItem.id + "1"})> Add </p>
=======
    <p onClick = addBtn(${
      selectedItem.id + "1"
    }) style = "cursor: pointer"> Add </p>
>>>>>>> 459557f5f90e32888e165dbe6a44f4aab3dc6a0f
    `;
    search.item -= 1;
  } else {
    search.item -= 1;
  }
  update(selectedItem.id);

  basket = basket.filter((item) => item.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
}
function update(id) {
  const search = basket.find((item) => item.id === id);
<<<<<<< HEAD
  console.log(search.item);
  // if(search.item)
=======
>>>>>>> 459557f5f90e32888e165dbe6a44f4aab3dc6a0f
  calcVal();
  if (search.item === 0) return;
  document.getElementById(id).textContent = String(search.item);
}

function calcVal() {
  const totalItems = basket.reduce((acc, item) => {
    return acc + item.item;
  }, 0);
  cartItem.textContent = totalItems;
}
// functions end

generateShop();

calcVal();
