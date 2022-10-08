//  all functions
function classSelct(cls, all) {
  if (all === "all") {
    return document.querySelectorAll(`.${cls}`);
  }
  return document.querySelector(`.${cls}`);
}
function increment(element) {
  const updatedId = element.id;
  const dataId = updatedId.slice(0, -1);
  const search = basket.find((item) => item.id === dataId);
  if (search.item < 10) {
    search.item += 1;
  } else {
    alert("max limit 10");
  }
  basket = basket.filter((item) => item.item !== 0);
  cartItem();
  document.getElementById(updatedId).innerHTML = "x " + search.item;
  totalCartItem();
  totalBill();
}
function decrement(element) {
  const updatedId = element.id;
  const dataId = updatedId.slice(0, -1);
  const search = basket.find((item) => item.id === dataId);
  if (search.item === 0) {
    return;
  } else {
    search.item -= 1;
  }
  basket = basket.filter((item) => item.item !== 0);
  document.getElementById(updatedId).innerHTML = "x " + search.item;
  cartItem();
  totalCartItem();
  totalBill();
}

function mealsItem() {
  const mealsItemList = DUMMY_MEALS.map((item) => {
    return `<li class="meal_item">
        <div>
          <h3>${item.name}</h3>
          <div class="description">${item.description}</div>
          <div class="price">$${item.price}</div>
        </div>
        <div>
          <form class ="amountSubmit" onsubmit=" return submitHandler(${item.id})">
            <div class="input">
              <label>Amount</label>
              <input type="number" min= "1" max= "5" step= "1" value= "1" id = "${item.id}"/>
            </div>
            <button type="submit" class="_add">+Add</button>
          </form>
        </div>
      </li>`;
  }).join("");
  selectedElement.mealLists.innerHTML = mealsItemList;
}
function cartItem() {
  if (basket.length !== 0) {
    const cartItems = basket
      .map((item) => {
        const search = DUMMY_MEALS.find((product) => product.id === item.id);
        const updateId = item.id + "a";

        return ` <li class="cart_item">
        <div>
          <h3>${search.name}</h3>
          <div class="_summary">
            <span class="_price">$${search.price}</span
            ><span class="_amount" id = "${updateId}">x ${item.item}</span>
          </div>
        </div>
        <div class="_actions">
          <button onclick = "decrement(${updateId})">−</button>
          <button onclick = "increment(${updateId})">+</button>
        </div>
      </li>`;
      })
      .join("");
    selectedElement.cart_items.innerHTML = cartItems;
  } else {
    selectedElement.cart_items.innerHTML = `<h2>Cart is Empty</h2>`;
  }
}
function submitHandler(element) {
  const { id, value } = element;
  const search = basket.find((item) => item.id === id);
  if (search) {
    search.item += +value;
  } else {
    basket.push({
      id: id,
      item: +value,
    });
  }
  selectedElement.cart.classList.add("bump");
  setTimeout(() => {
    selectedElement.cart.classList.remove("bump");
  }, 300);
  totalCartItem();
  return false;
}
function totalCartItem() {
  const totalItems = basket.reduce((acc, product) => acc + product.item, 0);
  selectedElement.cart_badge.innerHTML = totalItems;
}

function totalBill() {
  const bill = basket
    .map((product) => {
      const { id, item } = product;
      const search = DUMMY_MEALS.find((item) => item.id === id);
      return item * search.price;
    })
    .reduce((acc, price) => acc + price, 0)
    .toFixed(2);
  selectedElement.total_price.innerHTML = "$" + bill;
}
// all functions end
const selectedElement = {
  cart: classSelct("cart"),
  mealLists: classSelct("meal_lists"),
  overlay: classSelct("overlay"),
  backdrop: classSelct("back_drop"),
  close: classSelct("_close"),
  amountSubmit: "",
  cart_items: classSelct("cart_items"),
  total_price: classSelct("_total_price"),
  cart_badge: classSelct("cart-badge"),
};

let basket = [];

// cart functionality
//  on click cart hidden removed
selectedElement.cart.addEventListener("click", () => {
  cartItem();
  totalBill();
  selectedElement.overlay.classList.remove("hidden");
});
// on click backdrop hidden added
selectedElement.backdrop.addEventListener("click", () => {
  selectedElement.overlay.classList.add("hidden");
});
// on click close  hidden added
selectedElement.close.addEventListener("click", () => {
  selectedElement.overlay.classList.add("hidden");
});
mealsItem();
