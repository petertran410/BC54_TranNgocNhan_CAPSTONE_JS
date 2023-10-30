let ShoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    fetch("https://653f783f9e8bd3be29e0a2db.mockapi.io/product")
      .then((response) => response.json())
      .then((shopItemsData) => {
        ShoppingCart.innerHTML = basket
          .map((x) => {
            let { id, item } = x;
            let search = shopItemsData.find((data) => data.id === id) || {};
            let { img, price, name } = search;
            return `
            <div class="cart-item">
              <img width="100" src=${img} alt="" />
      
              <div class="details">
                
                <div class="title-price-x">
                  <h4 class="title-price">
                    <p>${name}</p>
                    <p class="cart-item-price">$ ${price}</p>
                  </h4>
                  <i onclick="removeItem('${id}')" class="bi bi-x-lg"></i>
                </div>
      
                <div class="cart-buttons">
                  <div class="buttons">
                    <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                    <div id="${id}" class="quantity">${item}</div>
                    <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                  </div>
                </div>
      
                <h3>$ ${item * price}</h3>
              
              </div>
            </div>
            `;
          })
          .join("");
        TotalAmount(shopItemsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } else {
    ShoppingCart.innerHTML = "";
    label.innerHTML = `
      <h2>Cart is Empty</h2>
      <a href="index.html">
        <button class="HomeBtn">Back to Home</button>
      </a>
      `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (itemId) => {
  let selectedItem = basket.find((item) => item.id === itemId);
  if (selectedItem) {
    basket = basket.filter((item) => item.id !== itemId);
    calculation();
    generateCartItems();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
  }
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    fetch("https://653f783f9e8bd3be29e0a2db.mockapi.io/product")
      .then((response) => response.json())
      .then((shopItemsData) => {
        let amount = basket
          .map((x) => {
            let { id, item } = x;
            let filterData = shopItemsData.find((data) => data.id === id);
            return filterData.price * item;
          })
          .reduce((x, y) => x + y, 0);

        label.innerHTML = `
        <h2>Total Bill : $ ${amount}</h2>
        <button class="checkout">Checkout</button>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>
        `;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } else {
    label.innerHTML = "";
  }
};

TotalAmount();

let clearCart = () => {
  basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};
