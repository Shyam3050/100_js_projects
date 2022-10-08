function classSelct(cls, all) {
  if (all === "all") {
    return document.querySelectorAll(`.${cls}`);
  }
  return document.querySelector(`.${cls}`);
}

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
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const CART_DATA = {
  items: [],
  total_price: 0,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCart,
};
function addItemToCartHandler(item) {
  CART_DATA.items.push(item);
  console.log(CART_DATA.items);
  const totalAmount = item.price * item.amount + CART_DATA.total_price;
  CART_DATA.total_price = +totalAmount.toFixed(2);
  selectedElement.total_price.textContent = "$" + CART_DATA.total_price;
  const element = cartItem(item);
  selectedElement.cart_items.insertAdjacentHTML("afterbegin", element);
  const noOfCartItems = CART_DATA.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  selectedElement.cart_badge.textContent = noOfCartItems;
  selectedElement.cart_badge.parentElement.classList.add("bump");
 
  const bump =  setTimeout(()=>{
   selectedElement.cart_badge.parentElement.classList.remove("bump")
  },300)
}
function removeItemFromCart() {}
function meals(item) {
  return `<li class="meal_item">
      <div>
        <h3>${item.name}</h3>
        <div class="description">${item.description}</div>
        <div class="price">$${item.price}</div>
      </div>
      <div>
        <form class ="amountSubmit">
          <div class="input">
            <label>Amount</label>
            <input type="number" min= 1 max= 5 step= 1 value=1 />
          </div>
          <button type="submit" class="_add">+Add</button>
        </form>
      </div>
    </li>`;
}
function cartItem(item) {
  return ` <li class="cart_item">
  <div>
    <h3>${item.name}</h3>
    <div class="_summary">
      <span class="_price">$${item.price}</span
      ><span class="_amount">x ${item.amount}</span>
    </div>
  </div>
  <div class="_actions">
    <button>−</button><button>+</button>
  </div>
</li>`;
}
//gloal render mealsItem
window.addEventListener("DOMContentLoaded", () => {
  let avlList = DUMMY_MEALS.forEach((item) => {
    let element = meals(item);
    selectedElement.mealLists.insertAdjacentHTML("afterbegin", element);
  });

  selectedElement.amountSubmit = classSelct("amountSubmit", "all");
  selectedElement.amountSubmit.forEach((element, index) => {
    element.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = DUMMY_MEALS[index];
      const form = e.currentTarget;
      const inputElement = form.getElementsByTagName("input");
      const inpVal = inputElement[0].value;

      const item = {
        ...data,
        amount: +inpVal,
      };
      addItemToCartHandler(item);
    });
  });
});
// global render for cartItems
window.addEventListener("DOMContentLoaded", () => {
  let avlCartItem = CART_DATA.items.map((item) => {
    return cartItem(item);
  });
  avlCartItem = avlCartItem.join("");
  selectedElement.cart_items.innerHTML = avlCartItem;
  selectedElement.total_price.textContent = "$" + CART_DATA.total_price;
});

// cart-overlay toggle
selectedElement.cart.addEventListener("click", () => {
  selectedElement.overlay.classList.remove("hidden");
});
selectedElement.backdrop.addEventListener("click", () => {
  selectedElement.overlay.classList.add("hidden");
});
selectedElement.close.addEventListener("click", () => {
  selectedElement.overlay.classList.add("hidden");
});
