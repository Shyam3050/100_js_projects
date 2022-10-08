let basket = JSON.parse(localStorage.getItem("data"));
const label = document.getElementById("label");
const shoppingCart = document.getElementById("shopping-cart");

// functions start
function calcVal() {
  const totalItems = basket.reduce((acc, item) => {
    return acc + item.item;
  }, 0);
  cartItem.textContent = totalItems;
}
function increment(id) {
  const selectedItem = id;
  const search = basket.find((item) => item.id === selectedItem.id);
  if (!search) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  generateCartITem();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
}
function decrement(id) {
  const selectedItem = id;
  const search = basket.find((item) => item.id === selectedItem.id);
  if (!search || search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((item) => item.item !== 0);
  generateCartITem();
  localStorage.setItem("data", JSON.stringify(basket));
}
function update(id) {
  const search = basket.find((item) => item.id === id);
  document.getElementById(id).innerHTML = search.item;
  totalAmount();
  calcVal();
}

function removeItem(id) {
  const selectedItem = id;
  console.log(basket, "bbe");
  basket = basket.filter((item) => item.id !== selectedItem.id);
  console.log(selectedItem.id);
  calcVal();
  generateCartITem();
  localStorage.setItem("data", JSON.stringify(basket));
}

function totalAmount() {
 if(basket.length !== 0){
  const totalAmount = basket
  .map((product) => {
    const { id, item } = product;
    const itemPriceList = shopItemsData.find((item) => item.id === id);
    return item * itemPriceList.price;
  })
  .reduce((acc,amount) => acc + amount, 0);
  label.innerHTML = `
  <h2>Total Bill: $${totalAmount}</h2>
  <button onclick = "clearItems()" class="clear">Clear</button>
  <button class="checkout">Checkout</button>
  `
 } else return;
}

function clearItems(){
  basket = [];
  generateCartITem()
  calcVal()
  localStorage.setItem( "data",JSON.stringify(basket));
}

const generateCartITem = () => {

  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((product) => {
        const { id, item } = product;
        const search = shopItemsData.find((mainItem) => mainItem.id === id);
        const { name, price, img } = search;
        
        return `<div class="cart-item">
      <img width = "100" src="./${img}" alt="">
      <div class="details">
          <div class="title-price-x">
          <h4>
            ${name} <span>$ ${price}</span>
          </h4>
          <i onclick= "removeItem(${id})" class = "bi bi-x-lg"></i>
          </div>
        <div class="buttons">
              <i class="bi bi-dash-lg" onclick= "decrement(${id})"></i>
              <div class="quantity" id = ${id}>${item}</div>
              <i class="bi bi-plus-lg" onclick = "increment(${id})"></i>
        </div>
         <h3>$ ${item * price}</h3>
      </div>
  </div>`;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = "";
    label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
          <button class = "homeBtn">Back to Home</button>
        </a>
        `;
  }
};
// functions end

calcVal();
generateCartITem();
totalAmount();
