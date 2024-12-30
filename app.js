let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
  body.classList.toggle('showCart')
})

const addDataToHTML = () => {
  listProductHTML.innerHTML = '';
  if(listProducts.length > 0){
    listProducts.forEach(product => {
      let newProduct = document.createElement('div');
      newProduct.classList.add('item');
      newProduct.innerHTML = `
          <img src="image/1 (1).png" alt="">
          <h2>NAME PRODUCT</h2>
          <div class="price">$200</div>
          <button class="addCart">
             add  to cart
          </button>
      `;
      listProductHTML.appendChild(newProduct);
    })
  }
}


const initApp = () => {
  // get data from json
  fetch('products.json')
  .then(response => response.json())
  .then(data => {
    listProducts = data;
    addDataToHTML();

  })
}
initApp();