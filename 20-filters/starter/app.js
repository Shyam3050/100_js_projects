let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = function () {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h5> Sorry No Items Found </h5>`;
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;
      return `<article class="product" data-id="${id}">
    <img src="${image}" class="img product-img" alt = "${title}">
<footer>
<h5 class="product-name">${title}</h5>
<span class="product-price">$${price}</span>
</footer>
  </article>`;
    })
    .join("");
};

const companies = document.querySelector(".companies");
const displayButtons = function () {
  const buttons = [
    "all",
    ...new Set(filteredProducts.map((products) => products.company)),
  ];
  companies.innerHTML = buttons
    .map(
      (button) =>
        ` <button class="company-btn" data-id="${button}">${button}</button>`
    )
    .join("");
};

displayProducts();
displayButtons();
const companyBtn = document.querySelectorAll(".company-btn");
companyBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const eventList = e.target;
    console.log("clicked");
    if (eventList.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === eventList.dataset.id;
      });
    }
    displayProducts();
  });
});

const inputForm = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
inputForm.addEventListener("keyup", (e) => {
  const inputValue = searchInput.value.toLowerCase();
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  console.log("timeout");
  displayProducts();
});
